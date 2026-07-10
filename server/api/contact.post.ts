import { Resend } from 'resend'
import type { ContactForm } from '~/types'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody<ContactForm>(event)

    // Validación básica
    if (!body.name || !body.email || !body.phone || !body.eventType || !body.services?.length || !body.eventDate) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Todos los campos requeridos deben estar completos'
      })
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Email inválido'
      })
    }

    const config = useRuntimeConfig()
    
    // Verificar que la API key esté configurada
    if (!config.resendApiKey) {
      console.error('RESEND_API_KEY no está configurada')
      throw createError({
        statusCode: 500,
        statusMessage: 'Error de configuración del servidor. Por favor contacta al administrador.'
      })
    }

    const resend = new Resend(config.resendApiKey)

    // Formatear los servicios
    const serviciosFormateados = body.services.map(s => {
      const servicios: Record<string, string> = {
        'alquiler-equipos': 'Alquiler de Equipos',
        'turbo-pico': 'Turbo (Picó)',
        'iluminacion': 'Iluminación',
        'dj': 'DJ Profesional'
      }
      return servicios[s] || s
    }).join(', ')

    // Formatear tipo de evento
    const tiposEvento: Record<string, string> = {
      'boda': 'Boda',
      'xv-anos': 'XV Años',
      'cumpleanos': 'Cumpleaños',
      'empresarial': 'Fiesta Empresarial',
      'concierto': 'Concierto/Festival',
      'privada': 'Fiesta Privada',
      'otro': 'Otro'
    }
    const tipoEventoFormateado = tiposEvento[body.eventType] || body.eventType

    // Formatear fecha
    const fecha = new Date(body.eventDate).toLocaleDateString('es-CO', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })

    // Enviar email
    const { data, error } = await resend.emails.send({
      from: 'Coquies Sound Power <onboarding@resend.dev>', // Cambiar por tu dominio verificado
      to: [config.contactEmail || 'info@coquiessound.com'],
      replyTo: body.email,
      subject: `Nueva Solicitud de Cotización - ${body.name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #0F172A 0%, #1E40AF 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #0F172A; margin-bottom: 5px; }
            .value { background: white; padding: 10px; border-radius: 5px; border-left: 3px solid #1E40AF; }
            .footer { text-align: center; margin-top: 20px; color: #64748b; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">Nueva Solicitud de Cotización</h1>
              <p style="margin: 10px 0 0 0;">Coquies Sound Power</p>
            </div>
            
            <div class="content">
              <div class="field">
                <div class="label">Nombre Completo:</div>
                <div class="value">${body.name}</div>
              </div>

              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${body.email}</div>
              </div>

              <div class="field">
                <div class="label">Teléfono:</div>
                <div class="value">${body.phone}</div>
              </div>

              <div class="field">
                <div class="label">Tipo de Evento:</div>
                <div class="value">${tipoEventoFormateado}</div>
              </div>

              <div class="field">
                <div class="label">Fecha del Evento:</div>
                <div class="value">${fecha}</div>
              </div>

              <div class="field">
                <div class="label">Servicios de Interés:</div>
                <div class="value">${serviciosFormateados}</div>
              </div>

              ${body.message ? `
              <div class="field">
                <div class="label">Mensaje / Detalles:</div>
                <div class="value">${body.message}</div>
              </div>
              ` : ''}

              <div class="footer">
                <p>Esta solicitud fue enviada desde el formulario de contacto de coquiessound.com</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `
    })

    if (error) {
      console.error('Error al enviar email:', error)
      throw createError({
        statusCode: 500,
        statusMessage: 'Error al enviar el email. Por favor intenta nuevamente.'
      })
    }

    return {
      success: true,
      message: 'Solicitud enviada exitosamente',
      id: data?.id
    }

  } catch (error: any) {
    console.error('Error en el endpoint de contacto:', error)
    
    if (error.statusCode) {
      throw error
    }

    throw createError({
      statusCode: 500,
      statusMessage: 'Error al procesar la solicitud. Por favor intenta nuevamente.'
    })
  }
})

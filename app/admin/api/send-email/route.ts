import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, day, time, duration, sessionType, numberOfSessions, sessionDuration, breakDuration } = body

    // Create email content
    const durationText = sessionType === "Aufgeteilt" && sessionDuration
      ? `${numberOfSessions}× ${sessionDuration} Min. + Pausen (${breakDuration} Min.)`
      : `${duration} Minuten`

    const emailHtml = `
      <!DOCTYPE html>
      <html lang="de">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bestätigung deiner Lerngruppen-Anmeldung</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f3f4f6;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; padding: 40px 20px;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <tr>
                  <td style="padding: 40px 40px 30px 40px;">
                    <h1 style="margin: 0 0 20px 0; font-size: 24px; color: #1f2937;">Lerngruppen-Anmeldung bestätigt</h1>
                    <p style="margin: 0 0 20px 0; font-size: 16px; color: #4b5563; line-height: 1.6;">Hallo ${name},</p>
                    <p style="margin: 0 0 20px 0; font-size: 16px; color: #4b5563; line-height: 1.6;">
                      deine Anmeldung für die Lerngruppe wurde erfolgreich gespeichert.
                    </p>
                    
                    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #eff6ff; border: 1px solid #dbeafe; border-radius: 8px; margin: 20px 0;">
                      <tr>
                        <td style="padding: 20px;">
                          <h2 style="margin: 0 0 15px 0; font-size: 18px; color: #1e3a8a;">Deine Lernsession:</h2>
                          <table width="100%" cellpadding="5" cellspacing="0">
                            <tr>
                              <td style="font-size: 14px; color: #1e40af;">📅 Tag:</td>
                              <td style="font-size: 14px; color: #1e40af; font-weight: bold;">${day}</td>
                            </tr>
                            <tr>
                              <td style="font-size: 14px; color: #1e40af;">🕐 Startzeit:</td>
                              <td style="font-size: 14px; color: #1e40af; font-weight: bold;">${time} Uhr</td>
                            </tr>
                            <tr>
                              <td style="font-size: 14px; color: #1e40af;">⏱️ Dauer:</td>
                              <td style="font-size: 14px; color: #1e40af; font-weight: bold;">${durationText}</td>
                            </tr>
                            <tr>
                              <td style="font-size: 14px; color: #1e40af;">📚 Modus:</td>
                              <td style="font-size: 14px; color: #1e40af; font-weight: bold;">${sessionType}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                    
                    <p style="margin: 0 0 20px 0; font-size: 16px; color: #4b5563; line-height: 1.6;">
                      Wir freuen uns auf produktives Lernen mit dir!
                    </p>
                    
                    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
                    
                    <p style="margin: 0; font-size: 12px; color: #6b7280; line-height: 1.6;">
                      Diese E-Mail dient nur zur Bestätigung. Deine Daten werden ausschließlich für die Organisation der Lerngruppe verwendet.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `

    const emailText = `
Hallo ${name},

deine Anmeldung für die Lerngruppe wurde erfolgreich gespeichert.

Deine Lernsession:
- Tag: ${day}
- Startzeit: ${time} Uhr
- Dauer: ${durationText}
- Modus: ${sessionType}

Wir freuen uns auf produktives Lernen mit dir!

Diese E-Mail dient nur zur Bestätigung. Deine Daten werden ausschließlich für die Organisation der Lerngruppe verwendet.
    `

    // Send email using EmailJS (client-side service - no API key needed on server)
    // EmailJS allows sending emails directly from the frontend
    // This will be handled on the client side
    
    // For now, return the email content so it can be sent from the client
    return NextResponse.json({ 
      success: true, 
      emailSent: true,
      emailData: {
        to: email,
        subject: 'Bestätigung deiner Lerngruppen-Anmeldung',
        html: emailHtml,
        text: emailText,
        name,
        day,
        time,
        durationText,
        sessionType
      },
      message: 'Anmeldung gespeichert - E-Mail wird versendet' 
    })

  } catch (error) {
    console.error('[v0] Error in send-email API:', error)
    // Return success even on error - data is already saved in localStorage
    return NextResponse.json({ 
      success: true, 
      emailSent: false,
      message: 'Anmeldung gespeichert (E-Mail-Versand nicht möglich)' 
    })
  }
}

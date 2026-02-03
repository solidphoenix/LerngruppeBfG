# EmailJS Setup-Anleitung

Diese Anleitung hilft Ihnen, den E-Mail-Versand für die Lerngruppen-Website einzurichten.

## Schritt 1: EmailJS-Konto erstellen

1. Gehen Sie zu [https://www.emailjs.com/](https://www.emailjs.com/)
2. Klicken Sie auf "Sign Up" und erstellen Sie ein kostenloses Konto
3. Bestätigen Sie Ihre E-Mail-Adresse

## Schritt 2: E-Mail-Service hinzufügen

1. Gehen Sie zu "Email Services" im Dashboard
2. Klicken Sie auf "Add New Service"
3. Wählen Sie Ihren E-Mail-Anbieter (z.B. Gmail, Outlook, etc.)
4. Folgen Sie den Anweisungen zur Verbindung Ihres E-Mail-Kontos
5. Notieren Sie sich die **Service ID** (z.B. "service_xyz123")

## Schritt 3: E-Mail-Templates konfigurieren

Sie benötigen **ZWEI** Templates:

### Template 1: template_t5tbtxo (Bestätigungs-E-Mail)

✅ **Bereits erstellt und konfiguriert**

**Subject:** Bestätigung deiner Lerngruppen-Anmeldung

**Content:**
```
Hallo {{to_name}},

deine Anmeldung für die Lerngruppe wurde erfolgreich gespeichert.

Deine Lernsession:
- Tag: {{day}}
- Startzeit: {{time}} Uhr
- Dauer: {{duration}}
- Modus: {{sessionType}}

Wir freuen uns auf produktives Lernen mit dir!

Falls du deine Anmeldung stornieren möchtest, klicke auf diesen Link:
{{delete_link}}

Diese E-Mail dient nur zur Bestätigung. Deine Daten werden ausschließlich für die Organisation der Lerngruppe verwendet.
```

### Template 2: template_3vb2qdr (Lösch-Link-E-Mail)

✅ **Bereits erstellt und konfiguriert**

**Subject:** Lösch-Link für deine Lerngruppen-Anmeldung

**Content:**
```
Hallo {{to_name}},

du hast einen Lösch-Link für deine Lerngruppen-Anmeldung angefordert.

Deine Anmeldung:
- Tag: {{day}}
- Startzeit: {{time}} Uhr

Um deine Anmeldung zu stornieren, klicke auf folgenden Link:
{{delete_link}}

Falls du diese E-Mail nicht angefordert hast, ignoriere sie einfach.

Hinweis: Der Link ist einmalig verwendbar und löscht deine Anmeldung permanent.
```

## Schritt 4: Public Key finden

1. Gehen Sie zu "Account" → "General"
2. Notieren Sie sich Ihren **Public Key** (z.B. "user_def789")

## Schritt 5: Code konfigurieren

### VOLLSTÄNDIG KONFIGURIERT (keine Änderung nötig):

✅ Public Key: `ukCJVevtRBgZ-Dr1B` (bereits eingetragen)
✅ Service ID: `service_0d3rj6z` (bereits eingetragen)
✅ Bestätigungs-Template: `template_t5tbtxo` (bereits eingetragen)
✅ Lösch-Link Template: `template_3vb2qdr` (bereits eingetragen)

**Die Templates sind wie folgt zugeordnet:**
1. **Bestätigungs-E-Mail** nach Anmeldung: `template_t5tbtxo` (in `/components/registration-form.tsx`)
2. **Lösch-Link-E-Mail** bei Stornierungsanfrage: `template_3vb2qdr` (in `/components/participants-list.tsx`)

Sie können die Template IDs in den jeweiligen Dateien prüfen:

**/components/registration-form.tsx** (Zeile 111-114):
```typescript
await emailjs.send(
  'service_0d3rj6z',
  'template_t5tbtxo',  // ✅ Bestätigungs-E-Mail
  templateParams
)
```

**/components/participants-list.tsx** (Zeile 79-82):
```typescript
await emailjs.send(
  'service_0d3rj6z',
  'template_3vb2qdr',  // ✅ Lösch-Link-E-Mail
  templateParams
)
```

## Schritt 6: Testen

1. Starten Sie die Anwendung neu
2. Füllen Sie das Anmeldeformular aus
3. Nach dem Absenden sollten Sie eine E-Mail erhalten

## Fehlerbehebung

- **Keine E-Mail erhalten?** Überprüfen Sie Ihren Spam-Ordner
- **Fehler im Console-Log?** Überprüfen Sie, ob alle IDs korrekt eingefügt wurden
- **"Public key required"?** Stellen Sie sicher, dass `emailjs.init()` aufgerufen wird

## Wichtige Hinweise

- Das kostenlose EmailJS-Konto erlaubt **200 E-Mails pro Monat**
- Die E-Mails werden von Ihrem verbundenen E-Mail-Konto gesendet
- Daten werden immer gespeichert, auch wenn der E-Mail-Versand fehlschlägt

## Support

Bei Problemen besuchen Sie:
- [EmailJS Dokumentation](https://www.emailjs.com/docs/)
- [EmailJS Support](https://www.emailjs.com/support/)

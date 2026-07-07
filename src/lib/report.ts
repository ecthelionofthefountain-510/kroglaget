const REPORT_EMAIL = 'lundstedt.kevin@gmail.com'

/** mailto-länk för att rapportera fel pris/info för ett ställe. */
export function reportLink(place: string, currentInfo?: string): string {
  const subject = `BrewBite – fel för ${place}`
  const body = `Hej!\n\nDet stämmer inte för "${place}"${
    currentInfo ? ` (appen visar: ${currentInfo})` : ''
  }:\n\n[skriv vad som är fel/rätt här]\n`
  return `mailto:${REPORT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

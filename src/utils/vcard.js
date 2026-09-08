export function downloadVCard() {
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:Trevooresin;Studio;;;',
    'FN:Trevooresin Studio',
    'ORG:Trevooresin - Handcrafted Resin Art',
    'TEL;TYPE=CELL,VOICE:+918639335031',
    'TEL;TYPE=WORK,VOICE:+918639335031',
    'URL;TYPE=Instagram:https://www.instagram.com/trevooresin/',
    'URL;TYPE=Portfolio:https://trevooresin.com',
    'NOTE:Luxury handcrafted resin art\\, wedding flower preservation\\, geode wall clocks\\, custom keepsakes\\, personalized nameplates.',
    'CATEGORIES:Resin Art,Artisan Studio,Wedding Keepsakes',
    'END:VCARD'
  ].join('\r\n');

  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Trevooresin_Studio.vcf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

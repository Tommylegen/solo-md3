let handler = async (m, { conn }) => {
conn.relayMessage(m.chat, { liveLocationMessage: {
  noteMessage: { extendedTextMessage: { text: wm,
  degreesLatitude: 0,
  degreesLongitude: 0,
  accuracyInMeters: 0,
degreesClockwiseFromMagneticNorth: 2,
caption: 'y',
sequenceNumber: 2,
timeOffset: 3,
jpegThumbnail: thumb, 
contextInfo: m,
}}}}, {})

}
handler.command = /^(tes)$/i

module.exports = handler

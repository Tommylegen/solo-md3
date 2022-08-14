let fetch = require('node-fetch')
let handler = async (m, { conn, args, text}) => {
  if (!text) throw `Masukan Link nya!`
  let json = await require("yuzzu-api").ytdl(text)

await m.reply(wait)
await conn.sendMessage(    m.chat,     { audio: { url: json.mp3 }, mimetype: 'audio/mp4' }, )}

handler.help = ['yta <url>', 'ytmp3 <url>']
handler.tags = ['downloader']
handler.command = /^(yta|ytmp3)$/i

handler.register = true
handler.limit = true

module.exports = handler

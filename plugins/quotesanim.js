                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  //by AsuKidal

let fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, text, command }) => {
  let json = await require("../lib/scrape").quotesAnime('')
  conn.sendButtonImg(m.chat, json.gambar, `${json.quotes} - By _${json.karakter}_ \nEpisode : ${json.episode}\nFrom Anime : ${json.anime}\nLink : ${json.link}`, `${json.up_at}`, `Lainnya`, `${usedPrefix + command}`, ftoko)
}
handler.help = ['quotesanim']
handler.tags = ['anime']
handler.command = /^(quotesanim)$/i

handler.limit = true

module.exports = handler


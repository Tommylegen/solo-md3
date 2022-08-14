let fetch = require('node-fetch')
let handler = async (m, { conn, command }) => {
let res = await fetch(`https://hmtai.herokuapp.com/sfw/${command}`) 
let json = await res.json()

conn.sendImageAsSticker(m.chat, json.url, m, { packname: "Create By Lui This", author: `Random ${command}` })
}
handler.help = ["wave","wink","tea","bonk","punch","poke","bully","pat","kiss","kick","blush","feed","smug","hug","cuddle","cry","cringe","slap","five","glomp","happy","hold","nom","smile","throw","lick","bite","dance","boop","sleep","like","kill","tickle","nosebleed","threaten","depression"]
handler.tags = ['anime']
handler.command = /^(wave|wink|tea|bonk|punch|poke|bully|pat|kiss|kick|blush|feed|smug|hug|cuddle|cry|cringe|slap|five|glomp|happy|hold|nom|smile|throw|lick|bite|dance|boop|sleep|like|kill|tickle|nosebleed|threaten|depression)$/i

handler.limit = true

module.exports = handler

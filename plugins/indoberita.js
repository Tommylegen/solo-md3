let fetch = require('node-fetch')
let fs = require('fs')
let handler = async (m, { conn, usedPrefix, command }) => {
  if (/^MerdekaNews$/i.test(command)) {
  let json = await require("dhn-api").MerdekaNews('')
  let bilek = pickRandom(json)
    
 conn.sendButtonDoc(m.chat, `*${bilek.berita}*`, `${bilek.berita_diupload}`, `Lainnya`, `${usedPrefix + command}`, fkontak,{
 contextInfo: {   
            externalAdReply :{
    mediaUrl: `${bilek.berita_url}`,
    mediaType: 2,
    description: `Ok` , 
    title: `${bilek.berita}`,
    body: `Clik disini untuk langsung Ke web nya!`,
    thumbnail: await(await fetch(bilek.berita_thumb)).buffer(),
    sourceUrl: `${bilek.berita_url}`
     }}
  })
 }
  if (/^AntaraNews$/i.test(command)) {
  let json = await require("dhn-api").AntaraNews('')
  let bilek = pickRandom(json)
    
 conn.sendButtonDoc(m.chat, `*${bilek.berita}*`, `${bilek.berita_diupload}`, `Lainnya`, `${usedPrefix + command}`, fkontak,{
 contextInfo: {   
            externalAdReply :{
    mediaUrl: `${bilek.berita_url}`,
    mediaType: 2,
    description: `Ok` , 
    title: `${bilek.berita}`,
    body: `Clik disini untuk langsung Ke web nya!`,
    thumbnail: await(await fetch(img)).buffer(),
    sourceUrl: `${bilek.berita_url}`
     }}
  })
 } 
  if (/^CNNNews$/i.test(command)) {
  let json = await require("dhn-api").CNNNews('')
  let bilek = pickRandom(json)
    
 conn.sendButtonDoc(m.chat, `*${bilek.berita}*`, `${bilek.berita_diupload}`, `Lainnya`, `${usedPrefix + command}`, fkontak,{
 contextInfo: {   
            externalAdReply :{
    mediaUrl: `${bilek.berita_url}`,
    mediaType: 2,
    description: `Ok` , 
    title: `${bilek.berita}`,
    body: `Clik disini untuk langsung Ke web nya!`,
    thumbnail: await(await fetch(img)).buffer(),
    sourceUrl: `${bilek.berita_url}`
     }}
  })
 }  
  if (/^iNews$/i.test(command)) {
  let json = await require("dhn-api").iNews('')
  let bilek = pickRandom(json)
    
 conn.sendButtonDoc(m.chat, `*${bilek.berita}*`, `${bilek.berita_diupload}`, `Lainnya`, `${usedPrefix + command}`, fkontak,{
 contextInfo: {   
            externalAdReply :{
    mediaUrl: `${bilek.berita_url}`,
    mediaType: 2,
    description: `Ok` , 
    title: `${bilek.berita}`,
    body: `Clik disini untuk langsung Ke web nya!`,
    thumbnail: await(await fetch(img)).buffer(),
    sourceUrl: `${bilek.berita_url}`
     }}
  }) 
 }
  if (/^TribunNews$/i.test(command)) {
  let json = await require("dhn-api").TribunNews('')
  let bilek = pickRandom(json)
    
 conn.sendButtonDoc(m.chat, `*${bilek.berita}*`, `${bilek.berita_diupload}`, `Lainnya`, `${usedPrefix + command}`, fkontak,{
 contextInfo: {   
            externalAdReply :{
    mediaUrl: `${bilek.berita_url}`,
    mediaType: 2,
    description: `Ok` , 
    title: `${bilek.berita}`,
    body: `Clik disini untuk langsung Ke web nya!`,
    thumbnail: await(await fetch(bilek.berita_thumb)).buffer(),
    sourceUrl: `${bilek.berita_url}`
     }}
  })
 } 
  if (/^DailyNews$/i.test(command)) {
  let json = await require("dhn-api").DailyNews('')
  let bilek = pickRandom(json)
    
 conn.sendButtonDoc(m.chat, `*${bilek.berita}*`, `${bilek.berita_diupload}`, `Lainnya`, `${usedPrefix + command}`, fkontak,{
 contextInfo: {   
            externalAdReply :{
    mediaUrl: `${bilek.berita_url}`,
    mediaType: 2,
    description: `Ok` , 
    title: `${bilek.berita}`,
    body: `Clik disini untuk langsung Ke web nya!`,
    thumbnail: await(await fetch(bilek.berita_thumb)).buffer(),
    sourceUrl: `${bilek.berita_url}`
     }}
  })
 }   
  if (/^DetikNews$/i.test(command)) {
  let json = await require("dhn-api").DetikNews('')
  let bilek = pickRandom(json)
    
 conn.sendButtonDoc(m.chat, `*${bilek.berita}*`, `${bilek.berita_diupload}`, `Lainnya`, `${usedPrefix + command}`, fkontak,{
 contextInfo: {   
            externalAdReply :{
    mediaUrl: `${bilek.berita_url}`,
    mediaType: 2,
    description: `Ok` , 
    title: `${bilek.berita}`,
    body: `Clik disini untuk langsung Ke web nya!`,
    thumbnail: await(await fetch(img)).buffer(),
    sourceUrl: `${bilek.berita_url}`
     }}
  })
 } 
  if (/^OkezoneNews$/i.test(command)) {
  let json = await require("dhn-api").OkezoneNews('')
  let bilek = pickRandom(json)
    
 conn.sendButtonDoc(m.chat, `*${bilek.berita}*`, `${bilek.berita_diupload}`, `Lainnya`, `${usedPrefix + command}`, fkontak,{
 contextInfo: {   
            externalAdReply :{
    mediaUrl: `${bilek.berita_url}`,
    mediaType: 2,
    description: `Ok` , 
    title: `${bilek.berita}`,
    body: `Clik disini untuk langsung Ke web nya!`,
    thumbnail: await(await fetch(bilek.berita_thumb)).buffer(),
    sourceUrl: `${bilek.berita_url}`
     }}
  })
 } 
  if (/^CNBCNews$/i.test(command)) {
  let json = await require("dhn-api").CNBCNews('')
  let bilek = pickRandom(json)
    
 conn.sendButtonDoc(m.chat, `*${bilek.berita}*`, `${bilek.berita_diupload}`, `Lainnya`, `${usedPrefix + command}`, fkontak,{
 contextInfo: {   
            externalAdReply :{
    mediaUrl: `${bilek.berita_url}`,
    mediaType: 2,
    description: `Ok` , 
    title: `${bilek.berita}`,
    body: `Clik disini untuk langsung Ke web nya!`,
    thumbnail: await(await fetch(bilek.berita_thumb)).buffer(),
    sourceUrl: `${bilek.berita_url}`
     }}
  })
 } 
  if (/^FajarNews$/i.test(command)) {
  let json = await require("dhn-api").FajarNews('')
  let bilek = pickRandom(json)
    
 conn.sendButtonDoc(m.chat, `*${bilek.berita}*`, `${bilek.berita_diupload}`, `Lainnya`, `${usedPrefix + command}`, fkontak,{
 contextInfo: {   
            externalAdReply :{
    mediaUrl: `${bilek.berita_url}`,
    mediaType: 2,
    description: `Ok` , 
    title: `${bilek.berita}`,
    body: `Clik disini untuk langsung Ke web nya!`,
    thumbnail: await(await fetch(img)).buffer(),
    sourceUrl: `${bilek.berita_url}`
     }}
  })
 } 
  if (/^KompasNews$/i.test(command)) {
  let json = await require("dhn-api").KompasNews('')
  let bilek = pickRandom(json)
    
 conn.sendButtonDoc(m.chat, `*${bilek.berita}*`, `${bilek.berita_diupload}`, `Lainnya`, `${usedPrefix + command}`, fkontak,{
 contextInfo: {   
            externalAdReply :{
    mediaUrl: `${bilek.berita_url}`,
    mediaType: 2,
    description: `Ok` , 
    title: `${bilek.berita}`,
    body: `Clik disini untuk langsung Ke web nya!`,
    thumbnail: await(await fetch(bilek.berita_thumb)).buffer(),
    sourceUrl: `${bilek.berita_url}`
     }}
  })
 }  
  if (/^SindoNews$/i.test(command)) {
  let json = await require("dhn-api").SindoNews('')
  let bilek = pickRandom(json)
    
 conn.sendButtonDoc(m.chat, `*${bilek.berita}*`, `${bilek.berita_diupload}`, `Lainnya`, `${usedPrefix + command}`, fkontak,{
 contextInfo: {   
            externalAdReply :{
    mediaUrl: `${bilek.berita_url}`,
    mediaType: 2,
    description: `Ok` , 
    title: `${bilek.berita}`,
    body: `Clik disini untuk langsung Ke web nya!`,
    thumbnail: await(await fetch(img)).buffer(),
    sourceUrl: `${bilek.berita_url}`
     }}
  })
 }   
  if (/^IndozoneNews$/i.test(command)) {
  let json = await require("dhn-api").IndozoneNews('')
  let bilek = pickRandom(json)
    
 conn.sendButtonDoc(m.chat, `*${bilek.berita}*`, `${bilek.berita_diupload}`, `Lainnya`, `${usedPrefix + command}`, fkontak,{
 contextInfo: {   
            externalAdReply :{
    mediaUrl: `${bilek.berita_url}`,
    mediaType: 2,
    description: `Ok` , 
    title: `${bilek.berita}`,
    body: `Clik disini untuk langsung Ke web nya!`,
    thumbnail: await(await fetch(bilek.berita_thumb)).buffer(),
    sourceUrl: `${bilek.berita_url}`
     }}
  })
 } 
  if (/^AntaraNews$/i.test(command)) {
  let json = await require("dhn-api").AntaraNews('')
  let bilek = pickRandom(json)
    
 conn.sendButtonDoc(m.chat, `*${bilek.berita}*`, `${bilek.berita_diupload}`, `Lainnya`, `${usedPrefix + command}`, fkontak,{
 contextInfo: {   
            externalAdReply :{
    mediaUrl: `${bilek.berita_url}`,
    mediaType: 2,
    description: `Ok` , 
    title: `${bilek.berita}`,
    body: `Clik disini untuk langsung Ke web nya!`,
    thumbnail: await(await fetch(bilek.berita_thumb)).buffer(),
    sourceUrl: `${bilek.berita_url}`
     }}
  })
 } 
  if (/^DailyNews$/i.test(command)) {
  let json = await require("dhn-api").DailyNews('')
  let bilek = pickRandom(json)
    
 conn.sendButtonDoc(m.chat, `*${bilek.berita}*`, `${bilek.berita_diupload}`, `Lainnya`, `${usedPrefix + command}`, fkontak,{
 contextInfo: {   
            externalAdReply :{
    mediaUrl: `${bilek.berita_url}`,
    mediaType: 2,
    description: `Ok` , 
    title: `${bilek.berita}`,
    body: `Clik disini untuk langsung Ke web nya!`,
    thumbnail: await(await fetch(bilek.berita_thumb)).buffer(),
    sourceUrl: `${bilek.berita_url}`
     }}
  })
 }                         
  if (/^KontanNews$/i.test(command)) {
  let json = await require("dhn-api").KontanNews('')
  let bilek = pickRandom(json)
    
 conn.sendButtonDoc(m.chat, `*${bilek.berita}*`, `${bilek.berita_diupload}`, `Lainnya`, `${usedPrefix + command}`, fkontak,{
 contextInfo: {   
            externalAdReply :{
    mediaUrl: `${bilek.berita_url}`,
    mediaType: 2,
    description: `Ok` , 
    title: `${bilek.berita}`,
    body: `Clik disini untuk langsung Ke web nya!`,
    thumbnail: await(await fetch(bilek.berita_thumb)).buffer(),
    sourceUrl: `${bilek.berita_url}`
     }}
  })
 }    
}
handler.help = ['MerdekaNews','iNews','CNNNews','TribunNews','AntaraNews','DailyNews','DetikNews','OkezoneNews','CNBCNews','FajarNews','KompasNews','SindoNews','IndozoneNews','KontanNews']
handler.tags = ['berita']
handler.command = /^(MerdekaNews|iNews|CNNNews|TribunNews|AntaraNews|DailyNews|DetikNews|OkezoneNews|CNBCNews|FajarNews|KompasNews|SindoNews|IndozoneNews|KontanNews)$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

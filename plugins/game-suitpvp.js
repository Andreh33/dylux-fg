
let timeout = 60000
let poin = 500
let poin_lose = -100
let poin_bot = 200
let handler = async (m, { conn, usedPrefix, text }) => {
conn.suit = conn.suit ? conn.suit : {}
if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.sender))) throw '*[ā] šš“šš¼šøš½š° šš šæš°šššøš³š° š°š½šš“š š³š“ šøš½š²šøš°š š¾ššš°*'
let textquien = `*š° šššøš“š½ šššøš“šš“š š³š“šš°šµšøš°š? š“ššøššš“šš° š° šš½š° šæš“ššš¾š½š°*\n\n*āā š“š¹š“š¼šæš»š¾:*\n${usedPrefix}suit @${global.suittag}`
if (!m.mentionedJid[0]) return m.reply(textquien, m.chat, { mentions: conn.parseMention(textquien)})
if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.mentionedJid[0]))) throw `*[ā] š»š° šæš“ššš¾š½š° š° š»š° ššš“ šššøš“šš“š š³š“šš°šµšøš°š š°šš½ š“ššš° š¹šš¶š°š½š³š¾ š¾ššš° šæš°šššøš³š°, š“ššæš“šš° š° ššš“ šš“šš¼šøš½š“ š³š“ š¹šš¶š°š`
let id = 'suit_' + new Date() * 1
let caption = `š® š¶š°š¼š“š - šæššæ - š¶š°š¼š“š š®\n\nāā @${m.sender.split`@`[0]} š³š“šš°šµšøš° š° @${m.mentionedJid[0].split`@`[0]} š° š“š½ šš½ šæššæ š³š“ šæšøš“š³šš°, šæš°šæš“š» š¾ ššøš¹š“šš°`.trim()
let footer = `ā š“šš²ššøš±š“ "aceptar" šæš°šš° š°š²š“šæšš°š\nā š“šš²ššøš±š“ "rechazar" šæš°šš° šš“š²š·š°šš°š`
let imgplaygame = `https://www.merca2.es/wp-content/uploads/2020/05/Piedra-papel-o-tijera-0003318_1584-825x259.jpeg`
conn.suit[id] = {
chat: await conn.sendButton(m.chat, caption, footer, imgplaygame, [[`Aceptar`], [`Rechazar`]], null, {mentions: conn.parseMention(caption)}),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (conn.suit[id]) conn.reply(m.chat, `[ ā³ ] ššøš“š¼šæš¾ š³š“ š“ššæš“šš° šµšøš½š°š»šøšš°š³š¾, š“š» šæššæ šš“ š²š°š½š²š“š»š¾ šæš¾š šµš°š»šš° š³š“ šš“ššæšš“ššš°`, m)
delete conn.suit[id]
}, timeout), poin, poin_lose, poin_bot, timeout
}}
handler.command = /^pvp|suit(pvp)?$/i
handler.group = true
handler.game = true
export default handler

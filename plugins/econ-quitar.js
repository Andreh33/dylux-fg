import MessageType from '@adiwajshing/baileys'
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `πΏππ½π πΏπ ππππππππΌπ πΌπ ππππΌπππ *@tag*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `πππππππ ππΌ πΎπΌππππΏπΌπΏ πΏπ πΏππΌππΌππππ`
if (isNaN(txt)) throw `πππ ππππ½ππππ, ππππ πππππππ πππππππ`
let dmt = parseInt(txt)
let limit = dmt
let pjk = Math.ceil(dmt * pajak)
limit -= pjk
if (limit < 1) throw `ππ ππππππ ππππππ ππΌππΌ πΏππΌππΌππππ ππ *1*`
let users = global.db.data.users
users[who].limit -= dmt
conn.sendHydrated(m.chat, `β­[ πΏππΌππΌππππ π ]β¬£\nβ\nβα¦ *PARA:*\nβα¦ *${text}*\nββββββββββββββββββ\nβα¦ *SE LE ELIMINΓ*\nβα¦ *${dmt} Diamante(s)* π\nβ\nβ°βββββββββββββββ¬£`, wm, null, null, null, null, null, [
null, null], m)
}
handler.help = ['adddi <@user>']
handler.tags = ['xp']
handler.command = ['eliminard', 'quitard', 'deld', 'deldiamantes', 'deleted'] 
handler.group = true
handler.botAdmin = true
handler.owner = true
export default handler

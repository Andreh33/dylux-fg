import fetch from 'node-fetch'

let timeout = 60000
let poin = 1000
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebaklagu = conn.tebaklagu ? conn.tebaklagu : {}
    let id = m.chat
    if (id in conn.tebaklagu) {
        conn.reply(m.chat, 'Todavía hay canciones sin respuesta en este chat.', conn.tebaklagu[id][0])
        throw false
    }
    // ubah isi 'id' kalo mau ganti playlist spotifynya
    let res = await fetch(global.API('xteam', '/game/tebaklagu/', { id: '1ZAuMjz1qhzV3ISWTQ3shT' }, 'APIKEY'))
    if (res.status !== 200) throw await res.text()
    let result = await res.json()
    let json = result.result
    // if (!json.status) throw json
    let caption = `
ADIVINA EL TITULO DE LA CANCION
Tiempo *${(timeout / 1000).toFixed(2)} segundos*
Escribe *${usedPrefix}hint* Para obtener una pista
Premio: ${poin} XP
*RESPONDE A ESTE MENSAJE CON LAS RESPUESTAS!*`.trim()
    conn.tebaklagu[id] = [
        await m.reply(caption),
        json, poin,
        setTimeout(() => {
            if (conn.tebaklagu[id]) conn.reply(m.chat, `Se acabó el tiempo!\nLa respuesta es *${json.judul}*`, conn.tebaklagu[id][0])
            delete conn.tebaklagu[id]
        }, timeout)
    ]
   // await conn.sendFile(m.chat, json.preview, 'coba-lagi.mp3', '', m)
}
handler.help = ['tebaklagu']
handler.tags = ['game']
handler.command = /^cancion|canción$/i
handler.limit = true
export default handler

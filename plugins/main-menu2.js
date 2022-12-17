
import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
≡ _Use estos comandos sin el prefijo_



┌─⊷ *AUDIOS*
🤖 Bot
😍 Bby
👩🏿‍🎤 Bieber
🌃 Buenas noches
🥟 empanadas
🤸 Buenas tardes
🤫 callate
👋 hola
💦 puto
📸 influencer
💖 te quiero
7️⃣ siu
🌿 fotosintesis
⏰ despierta
🍭 chupa chupa
🧏 otorrino
🐯 gemido
└──────────────
si quieres salir en un audio, habla con el creador *Andreh*
┌─⊷ *VERDAD O RETO*
💙 .verdad 
🥶 .reto
┌─⊷ *RANDOM*
🥵 .violar @tag
💏 .minovio/a @tag
`
//const pp = await (await fetch('https://ibb.co/w079DdG')).buffer()
    let pp = './src/fg_logo.jpg' 
    conn.sendButton(m.chat, m2, '▢ Andreh  ┃ ᴮᴼᵀ\n▢ Sígueme en Instagram\nhttps://www.instagram.com/Andreh_dobleuve\n', pp, [
      ['⏍ Info', `${usedPrefix}botinfo`],
      ['⌬ Grupos', `${usedPrefix}gpdylux`]
    ],m, rpyt)
   
}

handler.help = ['audios']
handler.tags = ['main']
handler.command = ['menu2', 'audios'] 

export default handler

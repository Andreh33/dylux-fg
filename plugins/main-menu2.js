
import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
โก _Use estos comandos sin el prefijo_



โโโท *AUDIOS*
๐ค Bot
๐ Bby
๐ฉ๐ฟโ๐ค Bieber
๐ Buenas noches
๐ฅ empanadas
๐คธ Buenas tardes
๐คซ callate
๐ hola
๐ฆ puto
๐ธ influencer
๐ te quiero
7๏ธโฃ siu
๐ฟ fotosintesis
โฐ despierta
๐ญ chupa chupa
๐ง otorrino
๐ฏ gemido
โโโโโโโโโโโโโโโ
si quieres salir en un audio, habla con el creador *Andreh*
โโโท *VERDAD O RETO*
๐ .verdad 
๐ฅถ .reto
โโโท *RANDOM*
๐ฅต .violar @tag
๐ .minovio/a @tag
`
//const pp = await (await fetch('https://ibb.co/w079DdG')).buffer()
    let pp = './src/fg_logo.jpg' 
    conn.sendButton(m.chat, m2, 'โข Andreh  โ แดฎแดผแต\nโข Sรญgueme en Instagram\nhttps://www.instagram.com/Andreh_dobleuve\n', pp, [
      ['โ Info', `${usedPrefix}botinfo`],
      ['โฌ Grupos', `${usedPrefix}gpdylux`]
    ],m, rpyt)
   
}

handler.help = ['audios']
handler.tags = ['main']
handler.command = ['menu2', 'audios'] 

export default handler

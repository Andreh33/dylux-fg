let handler  = async (m, { conn }) => {
let name = conn.getName(m.sender)
let teks = `
${pickRandom([` π¨ππΜ πππ ππππππ ππππ ππππππ π§`, `_uff mire un pajero_`, `_pagame y paso mi packππ₯΅_`, `_que_`, `_que quiere pija dice π€£`, `_pasa el pack de tu hermanaπ_`, `_mire un gilipolla_`, `_siuuu sexo sexo sexoπ_`, '_callarte putito_'])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})
}
handler.customPrefix = /Mande porno|porno|paja/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}


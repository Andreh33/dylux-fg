import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `*[β] πΈπ½πΆππ΄ππ΄ ππ½ ππ΄πππΎ πΏπ°ππ° π·π°π±π»π°π π²πΎπ½ ππΈπΌππΈπΌπΈ πΎ π΄π» π±πΎπ*\n\n*π΄πΉπ΄πΌπΏπ»πΎ: ${usedPrefix + command} Hola bot*`
let res = await fetch(global.API('https://api.simsimi.net', '/v2/', { text: encodeURIComponent(text), lc: "es" }, ''))
let json = await res.json()
let tes = json.success.replace('simsimi', 'simsimi').replace('Simsimi', 'Simsimi').replace('sim simi', 'sim simi')
m.reply(`${tes}`)
}
handler.help = ['simsimi']
handler.tags = ['General']
handler.command = ['bot', 'simi', 'simsimi']
export default handler

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['34624601950', 'Bot.Andreh', true],
  ['34643144360'] 
] //Numeros de owner 

global.mods = ['34722405582'] 
global.prems = ['34722405582', '5219631769130', '573125484672']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.packname = 'AndrehBot┃ᴮᴼᵀ' 
global.author = '@Andreh_DobleUve' 
global.igfg = '▢ Sígueme en Instagram\nhttps://www.instagram.com/Andreh_DobleUve\n' 
global.dygp = 'andreh te ama'
global.fgsc = 'Andreh te ama' 
global.fgyt = 'Andreh te ama'
global.fgpyp = 'Andreh te ama'
global.fglog = 'https://i.imgur.com/Owmb93c.png' 

global.wait = '*⌛ _Cargando..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

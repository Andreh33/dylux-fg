
import axios from "axios"

let handler = async (m, { args }) => {
  if (!args[0]) throw "โ ๏ธ *_๐๐ฌ๐๐ซ๐ข๐๐ ๐๐ฅ ๐ง๐จ๐ฆ๐๐ซ๐ ๐๐ ๐ฌ๐ฎ ๐๐ข๐ฎ๐๐๐ ๐จ ๐ฉ๐๐ข๐ฌ._*"
  try {
    const response = axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`
    )
    const res = await response
    const name = res.data.name
    const Country = res.data.sys.country
    const Weather = res.data.weather[0].description
    const Temperature = res.data.main.temp + "ยฐC"
    const Minimum_Temperature = res.data.main.temp_min + "ยฐC"
    const Maximum_Temperature = res.data.main.temp_max + "ยฐC"
    const Humidity = res.data.main.humidity + "%"
    const Wind = res.data.wind.speed + "km/h"
    const wea = `ใ ๐ ใ ๐ณ๐ผ๐ฎ๐จ๐น: ${name}\nใ ๐บ๏ธ ใ ๐ท๐จ๐ฐ๐บ: ${Country}\nใ ๐ค๏ธ ใ ๐ป๐ฐ๐ฌ๐ด๐ท๐ถ: ${Weather}\nใ ๐ก๏ธ ใ๐ป๐ฌ๐ด๐ท๐ฌ๐น๐จ๐ป๐ผ๐น๐จ: ${Temperature}\nใ ๐  ใ ๐ป๐ฌ๐ด๐ท๐ฌ๐น๐จ๐ป๐ผ๐น๐จ ๐ด๐ฐ๐ต๐ฐ๐ด๐จ: ${Minimum_Temperature}\nใ ๐ ใ ๐ป๐ฌ๐ด๐ท๐ฌ๐น๐จ๐ป๐ผ๐น๐จ ๐ด๐จ๐ฟ๐ฐ๐ด๐จ: ${Maximum_Temperature}\nใ ๐ฆ ใ ๐ฏ๐ผ๐ด๐ฌ๐ซ๐จ๐ซ: ${Humidity}\nใ ๐ฌ๏ธใ ๐ฝ๐ฐ๐ฌ๐ต๐ป๐ถ: ${Wind}
  `

    m.reply(wea)
  } catch (e) {
    return "โ ๏ธ *_Error, no se encontrarรณn resultados, trate de escribir un paรญs o ciudad existente._*"
  }
}

handler.help = ['clima *<ciudad/paรญs>*']
handler.tags = ['info']

handler.command = /^(clima|tiempo)$/i

export default handler

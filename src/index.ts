import { Telegraf } from 'telegraf'
import { BOT_TOKEN } from './config/bot.config'

const bot = new Telegraf(BOT_TOKEN)

bot.start((ctx) => {
    ctx.reply("HELLO!")
})

bot.launch()

console.log('Bot launched...')
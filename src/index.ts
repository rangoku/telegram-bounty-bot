import { Telegraf } from 'telegraf'
import { BOT_TOKEN } from './config/bot.config'
import { try_eval_math_expr } from './functions/evaluate_expr/eval_expr'
import {DEFAULT_STICKER_ID} from './globals/globals'

const bot = new Telegraf(BOT_TOKEN)

bot.start((ctx) => {
    ctx.reply("HELLO!")
})

bot.on('sticker', (ctx) => {
    ctx.replyWithSticker(DEFAULT_STICKER_ID)
})

bot.on('message', (ctx) => {

    // if message is math expression result of expression
    // will be returned in reply
    // @ts-ignore
    const eval_res = try_eval_math_expr(ctx.message.text)
    if (eval_res)
        ctx.reply(eval_res)
    else
        ctx.replyWithSticker(DEFAULT_STICKER_ID)
})

bot.launch().then(() => console.log('Bot launched...'))
    .catch(err => console.log("Error occurred launching bot: ", err))

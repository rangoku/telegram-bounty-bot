import { Scenes } from "telegraf";
import FileManager from '../../utils/files'
import compile from "./compile_cpp";

/**
 * Gets c/c++ file file from user
 * and returns .exe
 * (Telegraf doesn't allow to send .exe files
 * so I will wait util they fix it) 
 */
export const compile_scene = new Scenes.WizardScene(
    '__COMPILE_SCENE__',
    (ctx: any) => {
        ctx.reply('Send me file to compile (.c|.cpp|.cxx|.cc)')
        return ctx.wizard.next()
    },
    async ctx => {

        const { file_id, file_name } = ctx.message.document
        const file_url = await ctx.telegram.getFileLink(file_id)

        console.log(ctx.message.document)

        const filepath = await FileManager.download_from_telegram(file_id, file_url.href, file_name)

        console.log(filepath)

        const compiled = compile(filepath)

        console.log(compiled)

        ctx.telegram.sendDocument(ctx.chat.id, {
            type: 'multipart/form-data',
            media: {
                source: compiled,
                filename: 'x'
            }
        })

        ctx.scene.leave()
    }
)
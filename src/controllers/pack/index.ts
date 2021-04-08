import { Scenes } from "telegraf";
import pack_text_to_file, { remove_file, setExt, setText } from './pack_text'

/**
 * Gets text and file extension from user,
 * packs it into file with appropriate
 * extension and returns it to user 
 */
export const pack_scene = new Scenes.WizardScene(
    '__PACK_SCENE__',
    (ctx: any) => {
        ctx.reply('Send me text to pack')
        return ctx.wizard.next()
    },
    ctx => {
        setText(ctx.message.text)
        ctx.reply('Send file extension [ex: \'.txt\']')
        return ctx.wizard.next()
    },
    ctx => {
        setExt(ctx.message.text)
        const file = pack_text_to_file()
        if (file) {
            ctx.replyWithDocument({ source: file }).catch(err => console.log(err))
            remove_file(file)
        }
        else {
            ctx.reply('Cannot pack file. Check file extension format')
        }
        ctx.scene.leave()
    }
)

import fs from "fs"
import path from "path"
import { FILE_BUFFER } from '../../globals/globals'

let TEXT: string
let EXT_F: string

const setText = (text: string): void => {
    TEXT = text
}

const setExt = (extension: string): void => {
    EXT_F = extension
}

export { TEXT, setText }
export { EXT_F, setExt }

export default function pack_text_to_file() {
    if (TEXT && EXT_F)
        try {
            const filename = path.resolve(FILE_BUFFER, `text_${Date.now() + Math.random()}${EXT_F}`)
            fs.writeFileSync(filename, TEXT)
            return filename
        }
        catch (error) {
            console.error(error)
            return null
        }
    else
        return null
}

export function remove_file(filename: string) {
    return fs.unlink(filename, (err) => {
        if (err)
            console.error(err)
    })
}
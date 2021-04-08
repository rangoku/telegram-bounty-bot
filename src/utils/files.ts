import axios from 'axios'
import * as fs from 'fs'
import { FILE_BUFFER } from '../globals/globals'


export default class FileManager {

    public static async download_from_telegram(file_id: string, file_url: string,
        file_name: string): Promise<string> {

        const responce = await axios.get(file_url)

        console.log(responce.data)

        const file_path = `${FILE_BUFFER}/${file_name}`

        fs.writeFileSync(file_path, responce.data)

        return Promise.resolve(file_path)
    }

    public static get_file_extension(filename: string): string {
        return filename.split(/\.$/).pop()
    }

}


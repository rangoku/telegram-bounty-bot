import { exec } from 'child_process'
import path from 'path'
import { FILE_BUFFER } from '../../globals/globals'

/**
 * 
 * @param filename 
 * @returns 
 */
export default function compile(filename: string): string | null {
    if (/\.cpp|c|cxx|cc$/.test(filename)) {

        const filepath = path.resolve(FILE_BUFFER, 'test1.cpp')
        const name = path.resolve(FILE_BUFFER, 'compiled_' + Date.now() + Math.random() + '.exe')

        exec(`g++ -o ${name} ${filepath}`, (error, stdout, stderr) => {
            if (error || stderr)
                console.error(error || stderr)
        })
        return name
    }
    return null
}
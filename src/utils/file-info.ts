export function fileInfo(filepath: string)
{
    let parts = filepath.split('.')

    if (parts.length >= 2) {
        let ext = parts[parts.length - 1]
        let path = parts[parts.length - 2]
        let basename = filepath.split('/').slice(-1).join('')

        return { path: filepath, extension: ext, name: basename }

    } else {

        return { path: filepath, extension: null, name: null }
    }
}

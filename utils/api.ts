import fs from 'fs'

export const getFiles = (path = './'): any[] => {
  const entries = fs.readdirSync(path, { withFileTypes: true })

  const files = entries
    .filter(file => !file.isDirectory())
    .map(file => ({ ...file, path: path + file.name }))

  const folders = entries.filter(folder => folder.isDirectory())

  for (const folder of folders) {
    files.push(...getFiles(`${path}${folder.name}/`))
  }   

  return files
}
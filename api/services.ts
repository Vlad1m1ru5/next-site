import { promises } from 'fs'

export const findAllServices = async (path = './docs/'): Promise<Service[]> => {
  const entries = await promises.readdir(path, { withFileTypes: true })

  const files = entries
    .filter(file => !file.isDirectory())
    .map(file => ({ ...file, path: path + file.name }))

  const folders = entries.filter(folder => folder.isDirectory())

  for (const folder of folders) {
    files.push(...await findAllServices(`${path}${folder.name}/`))
  }   

  return files
}

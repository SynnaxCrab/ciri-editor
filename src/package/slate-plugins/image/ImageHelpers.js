import path from 'path'
import imageExtensions from 'image-extensions'

export const insertImage = (change, src, target) => {
  if (target) {
    change.select(target)
  }

  change.insertBlock({
    type: 'image',
    isVoid: true,
    data: { src }
  })
}

export const isImage = (filepath) => {
  const exts = new Set(imageExtensions)
  return exts.has(path.extname(filepath).slice(1).toLowerCase())
}
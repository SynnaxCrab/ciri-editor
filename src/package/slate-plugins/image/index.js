import { Block } from 'slate'
import renderNode from './ImageRenderNode'
import { onDropOrPaste } from './ImageEvents'
import { insertImage } from './ImageHelpers'

const schema = {
  document: {
    last: { types: ['paragraph'] },
    normalize: (change, reason, { node, child }) => {
      switch (reason) {
        case 'last_child_type_invalid': {
          const paragraph = Block.create('paragraph')
          return change.insertNodeByKey(node.key, node.nodes.size, paragraph)
        }
        default: return
      }
    }
  }
}

const ImagePlugin = () => ({
  schema: schema,
  onDrop: onDropOrPaste,
  onPaste: onDropOrPaste,
  renderNode: renderNode,
})

const Image = () => ({
  plugins: [
    ImagePlugin(),
  ],
  helpers: {
    insertImage,
  },
})

export default Image

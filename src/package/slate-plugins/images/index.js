import { Block } from 'slate-react'
import renderNode from './ImageRenderNode'
import { onDropOrPaste } from './ImageEvents'

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

const Image = () => ({
  schema: schema,
  onDrop: onDropOrPaste,
  onPaste: onDropOrPaste,
})

export default Image

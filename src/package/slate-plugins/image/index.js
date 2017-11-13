import { Block } from 'slate'
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
  renderNode: renderNode,
})

export default Image

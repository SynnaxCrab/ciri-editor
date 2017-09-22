import MarkNode from './MarkNode'

const MarkSchema = (type) => ({
  marks: {
    [type]: MarkNode(type),
  },
})

export default MarkSchema

import renderNode from './VideoRenderNode'
import { onPaste } from './VideoEvents'
import { insertVideo } from './VideoHelpers'

const VideoPlugin = () => ({
  onPaste: onPaste,
  renderNode: renderNode,
})

const Video = () => ({
  plugins: [
    VideoPlugin(),
  ],
  helpers: {
    insertVideo,
  },
})

export default Video

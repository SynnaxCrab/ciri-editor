import React from 'react'

const Video = ({ src }) => (
  <div>
    <iframe
      id='player'
      title='player'
      type='text/html'
      width='640'
      height='476'
      src={src}
      frameBorder='0'
    />
  </div>
)

export default Video

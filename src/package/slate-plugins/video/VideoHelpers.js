export const insertVideo = (change, src) => {
  change.insertBlock({
    type: 'video',
    isVoid: true,
    data: { src }
  })
}

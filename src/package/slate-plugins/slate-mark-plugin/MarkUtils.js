export const hasMark = (type, activeMarks) => activeMarks.some(mark => mark.type === type)

export const markStrategy = (type, change) => change.toggleMark(type)

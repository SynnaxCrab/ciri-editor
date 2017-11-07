export const hasMark = (type, activeMarks) => activeMarks.some(mark => mark.type === type)

export const toggleMark = (type, change) => change.toggleMark(type)

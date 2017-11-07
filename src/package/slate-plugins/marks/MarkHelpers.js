export const hasMark = (type, activeMarks) => activeMarks.some(mark => mark.type === type)

export const toggleMark = (change, type) => change.toggleMark(type)

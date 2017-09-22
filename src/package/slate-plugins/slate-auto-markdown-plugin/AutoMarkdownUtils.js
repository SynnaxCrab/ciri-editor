export const getType = chars => {
  switch (chars) {
    case '*':
    case '-':
    case '+': return 'list-item'
    case '>': return 'block-quote'
    case '#': return 'heading-one'
    case '##': return 'heading-two'
    case '###': return 'heading-three'
    case '####': return 'heading-four'
    case '#####': return 'heading-five'
    case '######': return 'heading-six'
    default: return null
  }
}

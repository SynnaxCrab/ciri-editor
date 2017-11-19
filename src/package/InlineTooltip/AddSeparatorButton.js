import React from 'react'
import Button from './Button'
import Icon from './Icon'

const AddSeparatorButton = ({ onChange, change }) => {
  const svg = [
    "M8.45 12H5.3c-.247 0-.45.224-.45.5 0 .274.203.5.45.5h5.4c.247 0 .45-.226.45-.5 0-.276-.203-.5-.45-.5H8.45z",
    "M17.45 12H14.3c-.247 0-.45.224-.45.5 0 .274.203.5.45.5h5.4c.248 0 .45-.226.45-.5 0-.276-.202-.5-.45-.5h-2.25z"
  ]

  function onClick() {
    change.setBlock({
      type: 'hr',
      isVoid: true
    })
    onChange(change)
  }

  return (
    <Button onClick={onClick}>
      <Icon paths={svg}/>
    </Button>
  )
}

export default AddSeparatorButton

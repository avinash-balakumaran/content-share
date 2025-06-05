import React from 'react'

function CustomButton(props) {
  const { name, link, attributes } = props

  return (
    <>
      <button {...attributes}> {name}</button>
    </>
  )
}

export default CustomButton

import React from 'react'

const Footer = ({length}) => {
    //const today = new Date();Copyright &copy; {today.getFullYear()}
  return (
    <footer>
        <p>{length} list {length === 1 ? 'Item' : 'Items'}</p>
    </footer>
  )
}

export default Footer
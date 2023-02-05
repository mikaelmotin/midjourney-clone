import React from 'react'

function Header() {
  return (
    <header className="p-6 bg-mid_darkblue">
      <div className="flex justify-end space-x-6">
        <a className="link"> #about </a>
        <a className="link" > #careers </a>
        <a className="link" > #contact </a>
        <a className="link italic" > Go To Gallery </a>
      </div>
    </header>
  )
}

export default Header
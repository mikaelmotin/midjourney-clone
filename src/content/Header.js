import React from 'react'

function Header() {
  return (
    <header className="py-4 bg-mid_darkblue">
      <div className="flex justify-end space-x-6">
        <a className="link"> #about </a>
        <a className="link" > #careers </a>
        <a className="link" > #contact </a>
        <a className="link italic" > Go To Gallery </a>
      </div>
      <p className="py-1 overflow-hidden max-w-full whitespace-nowrap opacity-90 text-white"> =============================================================================================================================================================================================================================================================== </p>
    </header>
  )
}

export default Header
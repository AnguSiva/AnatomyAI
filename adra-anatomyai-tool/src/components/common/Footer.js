import React from 'react'

const Footer = () => {
  return (
    <nav className="navbar fixed-bottom footer-index bg-light">
        <div className="container">
          <label className="mx-auto copyright">
            copyright &#169;2023 Powered by
            <a
              className="navbar-brand copyright"
              target="_blank"
              href="https://adraproductstudio.com/"
              rel="noreferrer"
            >
              <i>ADRA</i>
            </a>
          </label>
        </div>
      </nav>
  )
}

export default Footer
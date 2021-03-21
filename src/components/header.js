import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { CalendarIcon, MarkGithubIcon } from '@primer/octicons-react'


const Header = ({ siteTitle }) => (
  <header className="bg-white divide-black">
    <div>
      <h1>
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

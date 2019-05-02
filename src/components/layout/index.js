import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import SEO from '../seo'
import Navbar from '../navbar'

import '../../styles/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

const tags = [
  `software developer`,
  `Frontend Developer`,
  `Javascript`,
  `react`,
  `Portfolio Site`,
  `Golang`,
  `Hyderabad`,
  'India',
]

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <main className="container">
        <SEO title="M-Zubair Ahmed" keywords={tags} />
        <Navbar />
        <section>{children}</section>
      </main>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

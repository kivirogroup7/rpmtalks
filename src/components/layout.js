import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
     <p>Instagram - <a href="https://www.instagram.com/rpmtalks">@rpmtalks. </a>
             Twitter - <a href="https://twitter.com/rpmtalks">@rpmtalks. </a>
    Youtube - <a href="https://www.youtube.com/channel/UCa3Mb1QdTlOfbPi7KtvG_YQ">@rpmtalks. </a>
Podcast - <a href="https://anchor.fm/rpmtalks">@rpmtalks</a>. </p>

    

        <p>&copy; {new Date().getFullYear()} RPMTALKS &bull;</p>
       
      </footer>
    </div>
  )
}

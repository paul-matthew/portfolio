import * as React from "react"
import Layout from "@lekoarts/gatsby-theme-jodie/src/components/layout"

const styles = {
  image: {
    textAlign: 'center',
    backgroundImage:"url('https://freefrontend.com/assets/img/html-funny-404-pages/HTML-404-Error-Page.gif')"
  }
};

const NotFound = () => (
  <Layout>
    <div style={styles.image}>
      <h1>404</h1>
      <p>Page not found.</p>
    </div>
  </Layout>
)

export default NotFound

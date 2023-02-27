import * as React from "react"
import Layout from "@lekoarts/gatsby-theme-jodie/src/components/layout"

const styles = {
  image: {
    textAlign: 'center',
    backgroundImage:"url('./404.gif')"
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

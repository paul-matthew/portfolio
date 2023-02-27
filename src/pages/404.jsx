import * as React from "react"
import Layout from "@lekoarts/gatsby-theme-jodie/src/components/layout"

const styles = {
  image: {
    textAlign: 'center',
    backgroundImage:"url('https://www.impactbnd.com/hubfs/404-error-page-examples-best.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh'
  }
};

const NotFound = () => (
  <Layout>
    <div style={styles.image}>
    </div>
  </Layout>
)

export default NotFound

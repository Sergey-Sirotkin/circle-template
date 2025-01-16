import * as React from "react"
import Fade from "react-reveal/Fade"
import Layout from "../components/layout"

const NotFoundPage = () => (
  <Layout>
    <Fade bottom cascade>
      <div className="max-w-7xl mx-auto mt-10">
        <div className="mt-5">
          <span className="text-white text-sm opacity-50">Demos</span>
          <h1 className="text-white text-7xl font-poppins font-semibold leading-snug xxs:text-lg xs:text-lg sm:text-3xl lg:text-7xl">
            Demos will be here soon
          </h1>
        </div>
      </div>
    </Fade>
  </Layout>
)

export default NotFoundPage

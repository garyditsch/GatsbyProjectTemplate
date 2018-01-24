import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Slider from '../components/Slider'
import OurClients from '../components/OurClients'
import HowItWorks from '../components/HowItWorks'
import Testimonials from '../components/Testimonials'
import Services from '../components/Services'
import Footer from '../components/Footer'
import './bootstrap.min.css'
import './pe-icon-7-stroke.css'
import './font-awesome.min.css'
import './style.css'

const TemplateWrapper = (props) => (
  <div>
    <Helmet
      title="Active Lexington"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header metaData={props.data.site.siteMetadata} />
    <Slider />
    <OurClients image={props.data.client2} />
    <HowItWorks />
    <Testimonials />
    <Services />
    <Footer metaData={props.data.site.siteMetadata} />
  </div>

)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export const indexQuery = graphql`
    query IndexQuery {
        site {
            siteMetadata {
              title
            }
        },
        client2: imageSharp(id: { regex: "/client2/" }) {
          sizes(maxWidth: 241) {
            src
            sizes
            originalImg
            originalName
          }
        }
    }
`

export default TemplateWrapper

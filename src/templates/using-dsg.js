import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"


const UsingDSG = () => (
  <Layout>
    <h1>
    Contacto
    </h1>
    <p>
    ¿Tienes alguna pregunta o deseas trabajar con nosotros? ¡No dudes en ponerte en contacto con nuestro equipo! Estamos aquí para ayudarte con tus necesidades de desarrollo web y responder a todas tus consultas.
    </p>
    <Link to="/">Volver a inicio</Link>
  </Layout>
)

export const Head = () => <Seo title="Using DSG" />

export default UsingDSG

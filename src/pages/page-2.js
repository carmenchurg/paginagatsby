import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <h1>Nuestro Enfoque</h1>
    <p>En Desarrollo S.L, nos comprometemos a ofrecer soluciones de desarrollo web profesionales y personalizadas que impulsen el éxito de tu negocio en línea. Trabajamos en estrecha colaboración con nuestros clientes para entender sus necesidades y objetivos específicos, y nos esforzamos por superar sus expectativas en cada proyecto. Desde pequeñas empresas hasta grandes corporaciones, estamos aquí para ayudarte a alcanzar tu máximo potencial en línea.</p>
    <Link to="/">Volver a Inicio</Link>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage

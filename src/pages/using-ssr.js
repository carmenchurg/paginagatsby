import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import conocimientosImg from "../images/conocimientos.png" // Importa la imagen

const UsingSSR = ({ serverData }) => {
  return (
    <Layout>
      <Seo title="Using SSR" />
      <h1>Conocimientos en Desarrollo</h1>
      <p>¡Hola! Soy Carmen, una apasionada del desarrollo web y de aplicaciones. Poseo un amplio conjunto de habilidades técnicas que me permiten crear experiencias digitales únicas y funcionales. Mis conocimientos incluyen:</p>
      <img
        style={{ width: "800px", borderRadius: "var(--border-radius)" }}
        alt="Conocimientos"
        src={conocimientosImg} // Utiliza la imagen importada
      />
      <p></p>
      <Link to="/">Volver a inicio</Link>
    </Layout>
  )
}

export const Head = () => <Seo title="Using SSR" />

export default UsingSSR

export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breed/shiba/images/random`)
    if (!res.ok) {
      throw new Error(`Response failed`)
    }
    return {
      props: await res.json(),
    }
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    }
  }
}

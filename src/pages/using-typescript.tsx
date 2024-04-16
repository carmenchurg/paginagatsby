// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql, HeadFC } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({
  data,
  location,
}) => (
  <Layout>
    <h1>
      Proyectos
    </h1>
    <p>
    Aquí puedes encontrar algunos de nuestros proyectos recientes y destacados. Desde sitios web corporativos hasta tiendas en línea y aplicaciones web, nuestro portafolio demuestra nuestra experiencia y calidad en el desarrollo web.
    </p>
    
    <Link to="/">Volver a inicio</Link>
  </Layout>
)

export const Head: HeadFC<DataProps> = () => <Seo title="Using TypeScript" />

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`

import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Diseño Web Creativo",
    url: "https://www.ionos.es/digitalguide/paginas-web/diseno-web/inspiracion-para-una-pagina-web-con-diseno-creativo/",
    description:
      "Nuestro equipo de diseñadores web crea experiencias visuales cautivadoras que reflejan la identidad de tu marca y atraen a tu audiencia objetivo. Desde el diseño de interfaces de usuario hasta la creación de prototipos interactivos, nos comprometemos a ofrecer soluciones de diseño web creativas y personalizadas.",
  },
  {
    text: "Desarrollo Frontend y Backend",
    url: "https://platzi.com/blog/que-es-frontend-y-backend/#:~:text=La%20principal%20diferencia%20entre%20frontend,escena%20de%20una%20aplicaci%C3%B3n%20web.",
    description:
      "Utilizamos las últimas tecnologías y mejores prácticas de desarrollo para construir sitios web funcionales y eficientes. Nuestros desarrolladores frontend se enfocan en la usabilidad y la experiencia del usuario, mientras que nuestros desarrolladores backend se encargan de la seguridad y el rendimiento del sitio. Juntos, creamos sitios web robustos y escalables que cumplen con tus necesidades y objetivos.",
  },
  {
    text: "Optimización de Motores de Búsqueda (SEO)",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "El SEO es crucial para aumentar la visibilidad en línea y atraer tráfico orgánico a tu sitio web. Nuestro equipo de expertos en SEO utiliza estrategias avanzadas para mejorar el ranking de tu sitio en los motores de búsqueda y aumentar la cantidad y calidad de visitantes. Desde la investigación de palabras clave hasta la optimización del contenido, estamos comprometidos a maximizar el potencial de tu sitio web en línea.",
  },
  {
    text: "Mantenimiento y Soporte Continuo",
    url: "https://conasa.grupocibernos.com/blog/que-es-el-soporte-y-mantenimiento-de-aplicaciones",
    description:
      "El mantenimiento regular y el soporte continuo son esenciales para garantizar que tu sitio web funcione de manera óptima en todo momento. Ofrecemos servicios de mantenimiento proactivos y soporte técnico dedicado para garantizar que tu sitio web esté siempre actualizado, seguro y funcional. Nos ocupamos de los detalles técnicos para que puedas concentrarte en hacer crecer tu negocio.",
  },
]

const samplePageLinks = [
  {
    text: "Nuestro Enfoque",
    url: "page-2",
    badge: false,
    description:
      "En Desarrollo S.L, nos comprometemos a ofrecer soluciones de desarrollo web profesionales y personalizadas que impulsen el éxito de tu negocio en línea. Trabajamos en estrecha colaboración con nuestros clientes para entender sus necesidades y objetivos específicos, y nos esforzamos por superar sus expectativas en cada proyecto. Desde pequeñas empresas hasta grandes corporaciones, estamos aquí para ayudarte a alcanzar tu máximo potencial en línea.",
  },
  { text: "Proyectos", url: "using-typescript" },
  { text: "Conocimiento en desarrollo", url: "using-ssr" },
  { text: "Contacto", url: "using-dsg" },
]

const moreLinks = [
  { text: "Whatsapp", url: "https://www.whatsapp.com/?lang=es_LA" },
  {
    text: "Instagram",
    url: "https://www.instagram.com/",
  },
  {
    text: "Facebook",
    url: "https://www.facebook.com/ADLOrtografia/posts/3d1174e4/10160170667269507/?locale=af_ZA",
  },
  {
    text: "Linkedin",
    url: "https://www.linkedin.com/feed/?trk=sem-ga_campid.18146679037_asid.140850334975_crid.694860685343_kw.linkedin_d.c_tid.kwd-148086543_n.g_mt.e_geo.9061040",
  },
  {
    text: "GitHub",
    url: "https://github.com/",
  },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        Desarrollo Web Profesional
      </h1>
      <h2>Nuestros Servicios</h2>
      <p className={styles.intro}>
        {" "}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
      </p>
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

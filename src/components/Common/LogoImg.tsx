import { Helmet } from 'react-helmet'

const LogoImg = () => (
  <Helmet>
    <script type="application/ld+json">
      {`
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "url": "https://ellajang.github.io/",
        "logo": "https://ellajang.github.io/static/logoWeb96.png"
      }
    `}
    </script>
  </Helmet>
)

export default LogoImg

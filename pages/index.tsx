import Header from 'components/header'
import Footer from 'components/footer'

const IndexPage: React.FunctionComponent = () => (
  <>
    <Header />
    Hello its me
    <Footer />
  </>
)

export const getStaticProps = async () => ({ props: {} })

export default IndexPage

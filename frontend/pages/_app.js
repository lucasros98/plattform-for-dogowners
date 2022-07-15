import '../styles/globals.css'
import Page from '@/components/Page'
import { AppWrapper } from 'contexts/AppContext'

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Page>
        <Component {...pageProps} />
      </Page>
    </AppWrapper>)
}

export default MyApp

import '@/styles/globals.css'
import { Layout } from '@/styles/src/components/Layout'
import PageTransition from '@/styles/src/components/Layout/Animation'
import store from '@/styles/src/store'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

function App({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <PageTransition>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PageTransition>
    </Provider>
  )
}

export default (App)
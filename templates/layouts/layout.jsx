import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'
import { SearchWithCallback } from './components/search-with-callback'
import RequestButtonWrapper from './components/RequestButtonWrapper'
import logo from '../content/assets/logo.png'
import request from '../content/assets/request.png'

const navbar = (
  <Navbar
    logo={
      <>
        <img src={logo.src} width="32" height="32" alt="UAVOS logo" />
      </>
    }
  />
)

const footer = (
  <Footer>
    <div className="footer-wrapper">
      <div>
        UAVOS Email:{' '}
        <a href="mailto:uavos@uavos.com">uavos@uavos.com</a>
      </div>
      <RequestButtonWrapper className='request-footer' label="Make a Request" />
    </div>
  </Footer>
)

export default async function RootLayout({ children }) {
  const pageMap = await getPageMap()

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <link rel="icon" href={logo.src} />
      <body>
        <Layout
          sidebar={{ autoCollapse: true }}
          navbar={navbar}
          pageMap={pageMap}
          footer={footer}
          feedback={{ content: null }}
          editLink={null}
          search={
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <SearchWithCallback />
              <RequestButtonWrapper className='request-header' label={<img src={request.src} width="32" height="32" alt="Make Request" />} />
            </div>
          }
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}

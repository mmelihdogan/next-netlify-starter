import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Menar Yapı</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src="/logo.png" alt="Menar Logo"  />
        <Header title="Yapım Aşamasında" />
        <p className="description">
          
        </p>
      </main>

      <Footer />
    </div>
  )
}

import Link from 'next/link'

import Head from '../components/Head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default () => (
  <>
    <Head>
      <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
    </Head>
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-auto pb-24">
        <iframe
          class="airtable-embed airtable-dynamic-height"
          src="https://airtable.com/embed/shrtTiPoFHQ5L8nRt?backgroundColor=red"
          frameborder="0"
          onmousewheel=""
          width="100%"
          height="1747"
          style={{ background: 'transparent', border: '1px solid #ccc' }}
        ></iframe>
      </main>
      <Footer />
    </div>
  </>
)

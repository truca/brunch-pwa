import Head from 'next/head'
import Link from 'next/link'

export default class extends React.Component {
  render() {
    return <div>
      <Head>
        <title>{this.props.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="theme-color" content="#ff6600" />
        <link rel="apple-touch-icon" href="/static/icon.png" />
        <meta name="apple-mobile-web-app-title" content="Hacker News" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />

        <link rel="manifest" href="/static/manifest.json" />
      </Head>
      <style global jsx>{` /* Your Global CSS */ `}</style>      

      {this.props.children}
    </div>
  }
}
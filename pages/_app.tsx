import App from 'next/app'
import '../css/tailwind.css'
import { SEO } from '../components/SEO'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <SEO />
        <Component {...pageProps} />
      </>
    )
  }
}
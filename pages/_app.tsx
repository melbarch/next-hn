import App from 'next/app'
import '../css/tailwind.css'
import SEO from '../components/SEO'
import Link from 'next/link'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <SEO />
        <div className="flex flex-col justify-between bg-gray-100">
          <header className="flex justify-around items-center mt-3 mb-5 bg-gray-100 shadow-xs p-1">
            <Link href="/">
              <a>
                <div className="flex items-center">

                  <img
                    className="h-8 mr-2"
                    src="favicons/favicon-32x32.png"
                    alt="logo"
                  />
                  <span className="font-semibold">
                    Top of Hacker News
                </span>
                </div>
              </a>
            </Link>
            <a
              className="ml-5"
              href="https://github.com/melbarch/next-hn"
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg
                className="h-6"
                viewBox="0 0 128 128"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="github-logo"
              >
                <g clipRule="evenodd">
                  <path fill="none" d="M0 0h128v128H0z" />
                  <path d="M63.996 1.333C28.656 1.333 0 30.099 0 65.591c0 28.384 18.336 52.467 43.772 60.965 3.2.59 4.368-1.394 4.368-3.096 0-1.526-.056-5.566-.088-10.927-17.804 3.883-21.56-8.614-21.56-8.614-2.908-7.421-7.104-9.397-7.104-9.397-5.812-3.988.44-3.907.44-3.907 6.42.454 9.8 6.622 9.8 6.622 5.712 9.819 14.98 6.984 18.628 5.337.58-4.152 2.236-6.984 4.064-8.59-14.212-1.622-29.152-7.132-29.152-31.753 0-7.016 2.492-12.75 6.588-17.244-.66-1.626-2.856-8.156.624-17.003 0 0 5.376-1.727 17.6 6.586 5.108-1.426 10.58-2.136 16.024-2.165 5.436.028 10.912.739 16.024 2.165 12.216-8.313 17.58-6.586 17.58-6.586 3.492 8.847 1.296 15.377.636 17.003 4.104 4.494 6.58 10.228 6.58 17.244 0 24.681-14.964 30.115-29.22 31.705 2.296 1.984 4.344 5.903 4.344 11.899 0 8.59-.08 15.517-.08 17.626 0 1.719 1.152 3.719 4.4 3.088C109.68 118.034 128 93.967 128 65.591c0-35.492-28.656-64.258-64.004-64.258" />
                </g>
              </svg>
            </a>
          </header>

          <Component {...pageProps} />

          <footer className="text-center mt-3 mb-5 bg-gray-100 shadow-xs p-1">
            Made with ❤ by <a href="https://twitter.com/melbarchany" rel="noreferrer noopener" target="_blank" className="cursor-pointer underline">@melbarchany</a>
          </footer>

        </div>
      </>
    )
  }
}
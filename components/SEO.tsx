import Head from 'next/head'

const SEO = () => {
  const BASE_URL = "https://hn.melbarch.com";
  const defaultTitle = "Top of Hacker News";
  const defaultDescription = "Threads that are currently trending on the front page of hacker news";
  const defaultOGURL = BASE_URL;
  const defaultOGImage = `${BASE_URL}/banner.png`;

  const isProduction = process.env.NODE_ENV === 'production';

  return (
    <Head>
      <meta charSet="UTF-8" />
      <title>
        {defaultTitle}
      </title>
      <meta
        name="description"
        content={defaultDescription}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta property="og:url" content={defaultOGURL} />
      <meta property="og:title" content={defaultTitle} />
      <meta property="og:image" content={defaultOGImage} />
      <meta
        property="og:description"
        content={defaultDescription}
      />
      <meta name="twitter:site" content={defaultOGURL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@melbarchany" />
      <meta name="twitter:image" content={defaultOGImage} />
      {isProduction && (
        <>
          {/* GA */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-71823101-3"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'UA-71823101-3');`
            }}
          />
        </>
      )}

      {/* PWA */}
      <link rel="apple-touch-icon" sizes="57x57" href="favicons/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="favicons/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="favicons/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="favicons/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="favicons/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="favicons/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="favicons/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="favicons/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="favicons/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="favicons/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="favicons/favicon-16x16.png" />
      <link rel="manifest" href="manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="favicons/ms-icon-144x144.png" />
      <meta name='msapplication-config' content='browserconfig.xml' />
      <meta name='theme-color' content='#f26622' />
    </Head>
  )
};

export default SEO;
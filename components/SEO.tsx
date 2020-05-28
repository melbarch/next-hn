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
      <link rel="shortcut icon" href={defaultOGImage} />
      <meta name="theme-color" content="#ffffff" />

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
    </Head>
  )
};

export default SEO;
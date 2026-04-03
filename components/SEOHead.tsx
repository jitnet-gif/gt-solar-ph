import Head from 'next/head'

export default function SEOHead() {
  return (
    <Head>
      {/* Preload critical resources */}
      <link rel="preload" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.css" as="style" />

      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="https://lh3.googleusercontent.com" />

      {/* Performance & Core Web Vitals */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

      {/* Social Media Verification */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />
    </Head>
  )
}

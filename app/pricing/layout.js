export default function PricingLayout({ children }) {
    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          
          {/* SEO Meta Tags */}
          <meta name="description" content="Discover Pixelo's free AI image generator. Create stunning visuals with our powerful and user-friendly tool. No cost, just creativity." />
          <meta name="keywords" content="AI image generator, free image generator, Pixelo pricing, free AI art, create images for free" />
          <meta name="author" content="Pixelo Team" />
          <title>Pixelo Pricing - Free AI Image Generator</title>
  
          {/* Open Graph Meta Tags for Social Media */}
          <meta property="og:title" content="Pixelo Pricing - Free AI Image Generator" />
          <meta property="og:description" content="Discover Pixelo's free AI image generator. Create stunning visuals with our powerful and user-friendly tool. No cost, just creativity." />
          <meta property="og:image" content="./logo.png" />
          <meta property="og:url" content="https://www.pixelo.com/pricing" />
          <meta property="og:type" content="website" />
          
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Pixelo Pricing - Free AI Image Generator" />
          <meta name="twitter:description" content="Discover Pixelo's free AI image generator. Create stunning visuals with our powerful and user-friendly tool. No cost, just creativity." />
          <meta name="twitter:image" content="./logo.png" />
          
          {/* Link to Bootstrap CSS */}
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" />
          
          {/* Bootstrap JavaScript */}
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
  
          {/* Google Adsense */}
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5455709376701219" crossOrigin="anonymous"></script>
  
          {/* Favicon */}
          <link rel="icon" href="./logo.png" />
        </head>
        <body>
          {children}
        </body>
      </html>
    );
  }
  
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Road to Next.js</title>
      </head>
      <body>
        <h1>
          Layout Header
        </h1>
        {children}
      </body>
    </html>
  );
}
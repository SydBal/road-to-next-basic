export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Road to Next.js</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
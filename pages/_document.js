import Document, { Html, Head, Main, NextScript } from "next/document"

// Sets data-theme from localStorage before first paint to avoid a flash.
// With no stored choice, the prefers-color-scheme media query in CSS applies.
const themeScript = `
(function () {
  try {
    var t = localStorage.getItem("theme");
    if (t === "light" || t === "dark") {
      document.documentElement.setAttribute("data-theme", t);
    }
  } catch (e) {}
})();
`

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

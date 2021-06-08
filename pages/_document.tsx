import Document, { DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";

class CustomDocument extends Document {
  static async getServerSideProps(context: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originialRenderPage = context.renderPage;

    try {
      context.renderPage = () =>
        originialRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(context);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } catch (error) {
      throw error;
    } finally {
      sheet.seal();
    }
  }
}

export default CustomDocument;

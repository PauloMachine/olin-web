import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import Layout from "src/components/layout";
import Toast from "src/components/toast";
import { GlobalStyle } from "./app.styles";
import Routes from "./routes";
import Providers from "./providers";

const queryClient = new QueryClient();

const App = () => (
  <StyleSheetManager shouldForwardProp={isPropValid}>
    <Router>
      <QueryClientProvider client={queryClient}>
        <Providers>
          <GlobalStyle />
          <Layout>
            <Toast />
            <Routes />
          </Layout>
        </Providers>
      </QueryClientProvider>
    </Router>
  </StyleSheetManager>
);

export default App;

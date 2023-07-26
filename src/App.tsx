import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Transations } from "./pages/transations";
import { TransactionsProvider } from "./contexts/TransactionsContext";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionsProvider>
        <Transations/>
      </TransactionsProvider>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

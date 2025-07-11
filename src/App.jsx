import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
// import NotFound from "./pages/NotFound";
import theme from "./theme";
// const queryClient = new QueryClient();
import "@fontsource/big-shoulders-display/100.css";
import "@fontsource/big-shoulders-display/200.css";
import "@fontsource/big-shoulders-display/300.css";
import "@fontsource/big-shoulders-display/400.css";
import "@fontsource/big-shoulders-display/500.css";
import "@fontsource/big-shoulders-display/600.css";
import "@fontsource/big-shoulders-display/700.css";
import "@fontsource/big-shoulders-display/800.css";
import "@fontsource/big-shoulders-display/900.css";
import "@fontsource/inter";

import "@fontsource/angkor";

const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);

export default App;

import { Routes, Route } from "react-router-dom";

import ResponsiveAppBar from "./components/ResponsiveAppBar";
import HomePage from "./pages/HomePage";
import DocsPage from "./pages/DocsPage";
import BlogPage from "./pages/BlogPage";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./utils/colorTheme";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="products" element={<HomePage />} />
          <Route path="docs/*" element={<DocsPage />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;

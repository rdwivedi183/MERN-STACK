import "./App.css";

// components
import DataProvider from "./context/DataProvider";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { Box } from "@mui/material";

function App() {
  return (
    <DataProvider>
      <Header />
      <Box className="mt-5" style={{ marginTop: 55 }}>
        <Home />
      </Box>
    </DataProvider>
  );
}

export default App;

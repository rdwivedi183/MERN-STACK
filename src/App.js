import "./App.css";

// components

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Header />
      <Box className="mt-5" style={{ marginTop: 55 }}>
        <Home />
      </Box>
    </div>
  );
}

export default App;

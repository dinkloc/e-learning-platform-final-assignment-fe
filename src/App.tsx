import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from "react-router-dom";
import RouterList from "./routes";
function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <RouterList />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

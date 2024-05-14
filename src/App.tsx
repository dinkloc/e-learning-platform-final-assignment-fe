import { BrowserRouter } from "react-router-dom";
import RouterList from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <RouterList />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

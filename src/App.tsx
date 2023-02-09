import { Box } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FirstPage from "./Pages/FirstPage";
import SecondPage from "./Pages/SecondPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FirstPage />,
    
  },
  {
    path: "/second",
    element: <SecondPage />,
  }
]);

function App() {
  return (
    <Box sx={{width: 1200, mx: 'auto'}}>
      <RouterProvider router={router} />
    </Box>
  );
}

export default App;

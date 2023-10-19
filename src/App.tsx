import {BrowserRouter, Route, Routes} from "react-router-dom";
import GlobalStyles from "./style/common.styled.ts";
import routes from "./routes/route.tsx";

function App() {

  return (
    <BrowserRouter>
      <GlobalStyles/>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App

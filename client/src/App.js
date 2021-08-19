import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home.component";
import Success from "./pages/Success.component";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/user/:id" component={Success} />
    </BrowserRouter>
  );
}

export default App;

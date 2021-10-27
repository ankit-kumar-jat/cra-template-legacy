import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL || ""}>
      <h1>cra-template-redux-thunk</h1>
      <Routes />
    </BrowserRouter>
  );
}

export default App;

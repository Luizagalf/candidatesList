import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Header from "./Components/Header";
import Main from "./Components/Main";
import List from "./Components/List";

function App() {
return (
<BrowserRouter>
<div className="app">
<Header />
<div className="main">
<Routes>
<Route exact path="/home" element={<Main />} />
<Route exact path="/list" element={<List />} />

<Route exact path="/" element={<Navigate to="/home" />} />

{/* <Route path="*" element={<Main />} /> */}
</Routes>
</div>
</div>
</BrowserRouter>
);
}

export default App;

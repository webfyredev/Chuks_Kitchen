
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Explore from "./pages/explore"
import Orders from "./pages/orders"
import Account from "./pages/account"
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/explore" element={<Explore />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/account" element={<Account />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App


import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Explore from "./pages/explore"
import Orders from "./pages/orders"
import Account from "./pages/account"
import SignIn from "./pages/signin"
import SignUp from "./pages/signup"
import ScrollToTop from "./components/scrollToTop"

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/explore" element={<Explore />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/account" element={<Account />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App

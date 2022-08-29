// Import components
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Search from "./components/Search/Search";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Logo from "./components/Logo/Logo";
import CreateAccount from "./components/CreateAccount/CreateAccount";
import Quotes from "./components/Quotes/Quotes";
import "./App.css";

// // Import React dependencies
import { getQuotes } from './actions/quotes'
import { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { Route, Routes } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuotes());
  }, [dispatch]);

  return (
    <div className="app-container">
      <NavBar />
      <Logo />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/main" element={<Main />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Menu from "./page/Menu";
import Cart from "./page/Cart";
import Header from "./components/module/Header";
import NotFound from "./page/404";
import Spinner from "./components/module/Spinner";
import { useEffect, useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, [3000]);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;

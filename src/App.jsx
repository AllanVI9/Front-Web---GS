import { Outlet } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import { useEffect, useState } from "react";

function App() {
  const [link, setLink] = useState("/");

  useEffect(() => {
    if (window.location.href.endsWith("/") === true) {
      setLink("/login");
    } else {
      setLink("/");
    }
  }, []);

  return (
    <>
      <Nav link={link} />
      <Outlet />
    </>
  );
}

export default App;

import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

function Layout(props) {
  const [isLogged, setIsLogged] = props.isLogged;

  return (
    <div>
      <Header isLogged={[isLogged, setIsLogged]} />
      <Outlet isLogged={[isLogged, setIsLogged]} />
      <Footer />
    </div>
  );
}

export default Layout;

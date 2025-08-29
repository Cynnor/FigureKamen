import { Outlet } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";

function Layout() {
  return (
    <div>
      <main>
        <Header />
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}

export default Layout;

import { Outlet } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";

function Layout() {
  return (
    <div>
      <main>
        <Header />
        <div className="container">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default Layout;

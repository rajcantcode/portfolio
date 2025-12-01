// import Header from "./Header";
import { Outlet } from "react-router-dom";
import SpotlightPreview from "./SpotlightPreview";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  useEffect(() => {
    console.log("rendered Layout");
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <SpotlightPreview />
      <Header />
      <main className="bg-transparent w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

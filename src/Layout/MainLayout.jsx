
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
  

  return (
    <div className="flex flex-col min-h-screen">
    <Toaster position="top-right" reverseOrder={false} />
      <Navbar></Navbar>
      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-6">
        <Outlet />
      </main>

      {/* Footer */}
     <Footer></Footer>
    </div>
  );
};

export default MainLayout;

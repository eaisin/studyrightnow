import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className="relative flex flex-col min-h-screen bg-black text-gray-200 font-sans overflow-hidden">
      {/* bg for all */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        {/* base black bg */}
        <div className="absolute inset-0 bg-black" />

        {/* color movie orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-red-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000" />
        <div className="absolute top-[40%] left-[40%] w-80 h-80 bg-amber-500/10 rounded-full mix-blend-screen filter blur-[80px] animate-blob animation-delay-5000" />
      </div>

      {/* content wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* header */}
        <Header />

        {/* main content body*/}
        <main className="flex-1 p-2">
          <Outlet />
        </main>

        {/* footer */}
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;

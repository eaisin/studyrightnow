import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    // min-h-screen ensures the footer stays at the bottom even on empty pages
    <div className="flex flex-col min-h-screen bg-black text-gray-200 font-sans">
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default RootLayout;

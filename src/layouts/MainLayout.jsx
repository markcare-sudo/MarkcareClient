import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";
import { useState } from "react";
import { CITIES, SERVICES, } from "@/utils/data";
import Header from "@/components/Header";

const MainLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Right section: header + main content */}
      <div className="flex flex-col flex-1 h-full overflow-hidden bg-neutral-950 text-white">
        <main className="flex-1 overflow-y-auto bg-gray-50">
          <Header open={open} setOpen={setOpen} cities={CITIES} />
          <Outlet />
          <Footer services={SERVICES} cities={CITIES} />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;

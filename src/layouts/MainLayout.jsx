import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";
import { useState } from "react";
import { CITIES } from "@/utils/data";
import Header from "@/components/Header";
import SEO from "@/components/SEO";

const MainLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Right section: header + main content */}
      <div className="flex flex-col flex-1 h-full overflow-hidden text-white">
        <SEO 
            title="Mark Care - Specialized Services" 
            description="Mark Care provides comprehensive solutions and specialized services including elevators, RO water purifiers, sewage treatment, diesel generators and air conditioning."
        />
        <main className="flex-1 overflow-y-auto">
          <Header open={open} setOpen={setOpen} cities={CITIES} />
          <Outlet />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;

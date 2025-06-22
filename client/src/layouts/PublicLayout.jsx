import { Outlet } from "react-router-dom";
import Navbar from "@/Home/Navbar";
const PublicLayout = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      
      {/* Example: <Sidebar /> */}
       <Navbar />
      <Outlet />
    </main>
  );
};

export default PublicLayout;

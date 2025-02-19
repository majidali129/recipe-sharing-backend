import Header from "./Header";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const AppLayout = () => {
  return (
    <section className="grid sm:grid-cols-[220px_1fr] grid-cols-[60px_1fr] w-full h-[100vh]">
      <Sidebar />
      <div className="border-l border-l-zinc-700 bg-zinc-950 grid grid-rows-[60px_1fr] sm:grid-rows-[70px_1fr]">
        <Header />
        <div className="sm:h-[calc(100vh-70px)] h-[calc(100vh-60px)] px-2 sm:px-4 content">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default AppLayout;

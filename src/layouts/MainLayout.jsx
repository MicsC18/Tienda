import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <section className="main-content">
        <Outlet />
      </section>
    </>
  );
};

import Header from "./Header";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-y-0 w-48">
        <Header />
      </div>
      <div className="absolute inset-y-0 left-16 right-0">
        <Outlet />
      </div>
    </div>
  );
}

import Navbar from "@/layout/-Navbar";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <div className="font-Montserrat">
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <Navbar />
      <Outlet />
    </div>
  ),
});

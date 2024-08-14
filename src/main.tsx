import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { routeTree } from "./routeTree.gen";
import "./index.css";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const queryClient = new QueryClient();
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <QueryClientProvider client={queryClient}>
      <StrictMode>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        <RouterProvider router={router} />
      </StrictMode>
    </QueryClientProvider>
  );
}

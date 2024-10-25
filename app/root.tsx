import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import { useState } from "react";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [forceRerenderKey, setForceRerenderKey] = useState(0);
  const triggerRerender = () => {
    setForceRerenderKey((prev) => prev + 1);
  };

  return (
    <html lang="en">
      <head key={forceRerenderKey}>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <button type="button" onClick={triggerRerender} disabled={forceRerenderKey > 0}>
        {forceRerenderKey === 0 ? "Click here to re-render <head> and see React Multiselect fail to render normally" : "<head> got re-rendered and now React Multiselect fails to display normally"}
        </button>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

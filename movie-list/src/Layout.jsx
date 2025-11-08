// src/Layout.jsx
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <header>
        {/* <nav>
          <Link to="/">Home</Link>
        </nav> */}
      </header>

      <main>
        <Outlet />
      </main>

    </div>
  );
}

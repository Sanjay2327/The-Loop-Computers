import { NavLink, useNavigate } from "react-router-dom";

export default function AdminSidebar() {

   const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };
  
  return (
    <aside className="w-64 bg-zinc-900 border-r border-zinc-800 p-6">
      <h2 className="text-xl font-semibold mb-8">
        Admin Panel
      </h2>

      <nav className="space-y-4">
        <NavLink
          to="/admin"
          end
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-zinc-300"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
            to="/admin/products" 
            className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-zinc-300"
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/admin/products/add"
          className={({ isActive }) =>
          isActive ? "text-blue-500" : "text-zinc-300"
        }
        >
          Add Product
        </NavLink>
        {/* <NavLink to="/admin/products">Products</NavLink> */}

         <button
          onClick={logoutHandler}
          className="mt-6 text-red-400 hover:text-red-500"
           >
          Logout
         </button>

      </nav>
    </aside>
  );
}

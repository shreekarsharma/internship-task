import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { Home as HomeIcon, UserPlus, Shield, Users } from "lucide-react";
import Home from "./components/Home";
import Register from "./components/Register";
import AdminView from "./components/AdminView";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: HomeIcon },
    { path: "/register", label: "Register", icon: UserPlus },
    { path: "/admin", label: "Admin", icon: Shield },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-lg border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-5 sm:py-0">
        <div className="flex items-center justify-between h-16 flex-col sm:flex-row gap-2 sm:gap-0">
          <div className="flex items-center space-x-2">
            <Users className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-slate-800">
              VolunteerHub
            </span>
          </div>

          <div className="flex space-x-1">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`
                  flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${
                    location.pathname === path
                      ? "bg-indigo-100 text-indigo-700 shadow-sm"
                      : "text-slate-600 hover:text-indigo-600 hover:bg-slate-50"
                  }
                `}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100">
        <Navigation />

        <main className="py-10 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<AdminView />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

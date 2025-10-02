import { NavLink } from "react-router-dom";
import { Trophy } from "lucide-react";

const Navbar = () => {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 rounded-md font-medium transition-all duration-200 ${
      isActive
        ? "bg-primary text-primary-foreground shadow-md"
        : "text-foreground hover:bg-muted hover:text-primary"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Trophy className="h-8 w-8 text-primary" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              FET Football Tournament
            </h1>
          </div>
          
          <div className="flex items-center gap-2">
            <NavLink to="/" className={navLinkClass}>
              Matches
            </NavLink>
            <NavLink to="/table" className={navLinkClass}>
              Table
            </NavLink>
            <NavLink to="/stats" className={navLinkClass}>
              Stats
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

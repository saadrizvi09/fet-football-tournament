import { NavLink } from "react-router-dom";
import { Menu, Trophy } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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
          <div className="flex items-center gap-2 min-w-0">
            <Trophy className="h-8 w-8 text-primary shrink-0" />
            <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent truncate">
              FET Football Tournament
            </h1>
          </div>

          {/* Desktop links */}
          <div className="hidden sm:flex items-center gap-2">
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

          {/* Mobile menu */}
          <div className="sm:hidden">
            <Sheet>
              <SheetTrigger className="p-2 rounded-md hover:bg-muted">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs">
                <div className="flex flex-col gap-2 mt-8">
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
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

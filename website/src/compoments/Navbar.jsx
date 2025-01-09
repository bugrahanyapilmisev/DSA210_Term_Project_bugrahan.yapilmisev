import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ChartBar, Castle, TrendingUp, BarChart } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-white border-b-2 border-white'
                  : 'text-gray-200 hover:text-white'
              }
              end
            >
              <div className="flex items-center">
                <ChartBar className="h-5 w-5 mr-2" />
                Dashboard
              </div>
            </NavLink>

            <NavLink
              to="/chess-usage"
              className={({ isActive }) =>
                isActive
                  ? 'text-white border-b-2 border-white'
                  : 'text-gray-200 hover:text-white'
              }
            >
              <div className="flex items-center">
                <Castle className="h-5 w-5 mr-2" />
                Chess Usage
              </div>
            </NavLink>

            <NavLink
              to="/academic-workload"
              className={({ isActive }) =>
                isActive
                  ? 'text-white border-b-2 border-white'
                  : 'text-gray-200 hover:text-white'
              }
            >
              <div className="flex items-center">
                <BarChart className="h-5 w-5 mr-2" />
                Academic Workload
              </div>
            </NavLink>

            <NavLink
              to="/correlation"
              className={({ isActive }) =>
                isActive
                  ? 'text-white border-b-2 border-white'
                  : 'text-gray-200 hover:text-white'
              }
            >
              <div className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Correlation
              </div>
            </NavLink>

            <NavLink
              to="/hypothesis-testing"
              className={({ isActive }) =>
                isActive
                  ? 'text-white border-b-2 border-white'
                  : 'text-gray-200 hover:text-white'
              }
            >
              <div className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Hypothesis Testing
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

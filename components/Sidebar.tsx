import React, { useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setNavbarTitle } from "../redux/store";
import {
  FaHome,
  FaExchangeAlt,
  FaUser,
  FaChartLine,
  FaCreditCard,
  FaMoneyCheckAlt,
  FaTools,
  FaGift,
  FaCog,
} from "react-icons/fa";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

/**
 * Sidebar Component Props Interface
 * @param {boolean} isSidebarOpen - Determines if the sidebar is open or closed
 * @param {Function} toggleSidebar - Function to toggle the sidebar visibility
 */
interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

/**
 * Sidebar Component
 * A collapsible sidebar navigation menu for the application.
 *
 * Features:
 * - Contains navigation links with icons
 * - Supports active item highlighting
 * - Updates the navbar title dynamically via Redux
 * - Responsive design with smooth transitions
 */
const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  const dispatch = useDispatch();
  const [activeItem, setActiveItem] = useState<string>("Dashboard"); // Default active menu item

  /**
   * Mapping between sidebar items and the corresponding navbar titles.
   * Used to dynamically update the page title when a sidebar item is clicked.
   */
  const titleMapping: { [key: string]: string } = {
    Dashboard: "Overview",
    Transactions: "Transaction History",
    Accounts: "My Accounts",
    Investments: "Investment Portfolio",
    "Credit Cards": "Credit Card Management",
    Loans: "Loan Overview",
    Services: "Available Services",
    "My Privileges": "Exclusive Privileges",
    Settings: "Settings",
  };

  /**
   * Handles sidebar link clicks.
   * Updates the active item state and dispatches a new navbar title.
   *
   * @param {string} label - The label of the clicked sidebar item
   */
  const handleLinkClick = (label: string) => {
    setActiveItem(label);
    dispatch(setNavbarTitle(titleMapping[label] || "Overview")); // Update navbar title
  };

  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-white shadow-md p-5 transition-transform overflow-y-auto z-50 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-64"
      } w-50`}
    >
      {/* Close Button */}
      <div className="flex items-center mb-6">
        <IconButton onClick={toggleSidebar}>
          <Close />
        </IconButton>
      </div>

      {/* Sidebar Navigation Links */}
      <ul className="space-y-6">
        {[
          { href: "/", label: "Dashboard", icon: <FaHome /> },
          { href: "/transactions", label: "Transactions", icon: <FaExchangeAlt /> },
          { href: "/accounts", label: "Accounts", icon: <FaUser /> },
          { href: "/investments", label: "Investments", icon: <FaChartLine /> },
          { href: "/credit-cards", label: "Credit Cards", icon: <FaCreditCard /> },
          { href: "/loans", label: "Loans", icon: <FaMoneyCheckAlt /> },
          { href: "/services", label: "Services", icon: <FaTools /> },
          { href: "/privileges", label: "My Privileges", icon: <FaGift /> },
          { href: "/settings", label: "Settings", icon: <FaCog /> },
        ].map(({ href, label, icon }) => (
          <li key={href}>
            <Link
              href={href}
              className={`flex items-center space-x-3 px-3 py-2 rounded-md transition-colors duration-300 ${
                activeItem === label ? "text-black font-bold" : "text-gray-400"
              }`}
              onClick={() => handleLinkClick(label)}
            >
              {icon} <span>{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;

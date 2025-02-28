// SearchBar.tsx
import React from "react";
import { Search } from "@mui/icons-material";
import { InputBase } from "@mui/material";

/**
 * Props for the SearchBar component.
 * 
 * @interface SearchBarProps
 * @property {string} [className] - Optional className for applying custom styles.
 */
interface SearchBarProps {
  className?: string; // Optional className to apply custom styles
}

/**
 * SearchBar Component
 * 
 * A simple search bar component with an icon and an input field for search functionality.
 * It uses Material UI's `InputBase` and `Search` icon components.
 * The `className` prop allows custom styling to be applied to the search bar.
 * 
 * @param {SearchBarProps} props - The properties for the SearchBar component.
 * @returns {JSX.Element} - The rendered SearchBar component.
 */
const SearchBar: React.FC<SearchBarProps> = ({ className }) => {
  return (
    <div className={`flex justify-center bg-gray-200 px-3 py-1 rounded ${className}`} mx-auto>
      {/* Search Icon */}
      <Search fontSize="small" className="text-gray-500 mt-1.5" />
      
      {/* Search Input Field */}
      <InputBase placeholder="Search for something" className="ml-2" />
    </div>
  );
};

export default SearchBar;

import { useRef, useState, useEffect } from "react";

const DropdownComponent = (
  {
    options = [],
    selectedValue,
    onChange = () => { },
  }
) => {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value) => {
    onChange(value);
    setIsOpen(false);
  };


  return (
    <div className="max-w-[260px] min-w-[250px]">
      <details ref={dropdownRef} open={isOpen} className="relative w-full">
        <summary
          onClick={(e) => {
            e.preventDefault();
            setIsOpen((prev) => !prev);
          }}
          className="cursor-pointer py-1.5 border border-[#D0D5DD] rounded-lg text-gray-900 flex justify-between items-center px-4 focus:outline-1 focus:outline-primary"
        >
          <span>
            {selectedValue === 'All' || !selectedValue ? "Select Category" : options.find((opt) => opt.value === selectedValue)?.label || selectedValue}
          </span>
          <span
            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0)" }}
            className="transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              width="20px"
              viewBox="0 -960 960 960"
              fill="currentColor"
            >
              <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>
          </span>
        </summary>

        <div className="border border-[#D0D5DD] rounded-lg py-2 mt-1 max-h-[200px] absolute w-full top-10 bg-white shadow-md overflow-y-auto">
          <ul className="list-none p-0 m-0">
            {options.map((item) => (
              <li
                key={item.value}
                className={`p-2 w-full hover:bg-light cursor-pointer text-base ${selectedValue === item.value ? "bg-light" : ""}`}
                onClick={() => handleSelect(item.value)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </details>
    </div>
  );
}

export default DropdownComponent
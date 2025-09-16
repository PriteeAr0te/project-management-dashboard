import React from "react";
import { Table, Grid3X3 } from "lucide-react"

const ViewToggle = ({ value, onChange, className = "" }) => {
    return (
        <div
            className={`relative inline-flex items-center rounded-lg p-1.5 bg-extra-light ${className}`}
        >
            <div
                className="absolute top-1 bottom-1 rounded-lg shadow-sm transition-all duration-300 ease-in-out"
                style={{
                    backgroundColor: "#6530d2",
                    width: "calc(50% - 2px)",
                    left: value === "table" ? "2px" : "calc(50% + 2px)",
                }}
            />

            <button
                onClick={() => onChange("table")}
                className={`relative z-10 inline-flex items-center gap-2 px-3 cursor-pointer py-2 text-sm font-medium rounded-lg focus:outline-0 transition-colors duration-200 ${value === "table"
                        ? "text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
            >
                <Table className="h-5 w-5" />
                <span className="text-sm sm:text-base">Table</span>
            </button>

            <button
                onClick={() => onChange("card")}
                className={`relative z-10 inline-flex items-center gap-2 px-3 cursor-pointer py-2 text-sm font-medium rounded-lg focus:outline-0 transition-colors duration-200 ${value === "card"
                        ? "text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
            >
                <Grid3X3 className="h-5 w-5" />
                <span className="text-sm sm:text-base">Card</span>
            </button>
        </div>
    );
};

export default ViewToggle;

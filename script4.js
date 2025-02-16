import React from "react";

export default function App() {
    const handleClick = () => {
        console.log("Button clicked!");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <button
                className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-200"
                onClick={handleClick}
            >
                Click Me
            </button>
        </div>
    );
}

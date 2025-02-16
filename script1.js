import { useState } from "react";

export default function TextUpdater() {
    const [text, setText] = useState("");

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <h2 className="text-2xl font-semibold mb-4">Text Updater</h2>
            <input
                type="text"
                placeholder="Type something..."
                className="border border-gray-400 p-2 rounded-lg w-64 text-lg"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <p className="mt-4 text-lg font-medium text-gray-700">You typed: {text}</p>
        </div>
    );
}

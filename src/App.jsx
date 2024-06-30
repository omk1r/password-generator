import { useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [includeUpperCase, setIncludeUpperCase] = useState(true);
  const [password, setPassword] = useState("");

  function generatePass() {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

    let possibleCharacters = lowercase;
    if (includeNumbers) possibleCharacters += numbers;
    if (includeSymbols) possibleCharacters += symbols;
    if (includeUpperCase) possibleCharacters += uppercase;

    let passwordArray = [];
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * possibleCharacters.length);
      passwordArray.push(possibleCharacters[randomIndex]);
    }

    const newPassword = passwordArray.join("");
    setPassword(newPassword);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <header className="text-4xl mb-8 font-semibold">
        Password Generator
      </header>
      <div className="flex flex-col items-center bg-white p-4 rounded shadow-md">
        <label className="mb-4">
          Length:
          <input
            type="number"
            value={length}
            min={5}
            max={20}
            onChange={(e) => setLength(e.target.value)}
            className="ml-2 border border-gray-300 p-2 rounded"
          />
        </label>
        <label className="mb-4">
          Include Numbers:
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
            className="ml-2"
          />
        </label>
        <label className="mb-4">
          Include Symbols:
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
            className="ml-2"
          />
        </label>
        <label className="mb-4">
          Include Uppercase:
          <input
            type="checkbox"
            checked={includeUpperCase}
            onChange={(e) => setIncludeUpperCase(e.target.checked)}
            className="ml-2"
          />
        </label>
        <button
          type="button"
          onClick={generatePass}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Generate Password
        </button>
        {password && (
          <div className="mt-4 p-2 bg-gray-200 rounded">
            <strong>Password:</strong> {password}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

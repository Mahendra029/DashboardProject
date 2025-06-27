import { useState, useEffect } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/api/items')
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const handleAdd = () => {
    if (inputValue.trim() !== '') {
      fetch('http://localhost:8081/api/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: inputValue })
      })
        .then((res) => res.json())
        .then((newItem) => {
          setItems((prev) => [...prev, newItem]);
          setInputValue('');
        });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start p-8">
      <h1 className="text-3xl font-bold text-gray-700 mb-6">Dashboard</h1>

      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            value={inputValue}
            placeholder="Enter text"
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAdd}
            className="bg-blue-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition duration-150"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="bg-gray-200 px-3 py-2 rounded-md">
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

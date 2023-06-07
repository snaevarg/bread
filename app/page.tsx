
'use client'
import { useState, useEffect } from "react";

export default function BreadPage() {
  const initialFlour = 500;
  const initialWater = 350;
  const initialSaltPercentage = 2;
  const initialYeastPercentage = 1.4;
  const initialHydration = 70;

  const [flour, setFlour] = useState(initialFlour);
  const [water, setWater] = useState(initialWater);
  const [salt, setSalt] = useState(flour * (initialSaltPercentage / 100));
  const [yeast, setYeast] = useState(flour * (initialYeastPercentage / 100));
  const [hydration, setHydration] = useState(initialHydration);
  const [saltPercentage, setSaltPercentage] = useState(initialSaltPercentage);
  const [yeastPercentage, setYeastPercentage] = useState(initialYeastPercentage);
  const [yeastType, setYeastType] = useState("dry");

  useEffect(() => {
    setWater(flour * (hydration / 100));
  }, [flour, hydration]);

  useEffect(() => {
    setSalt(flour * (saltPercentage / 100));
  }, [flour, saltPercentage]);

  useEffect(() => {
    setYeast(flour * (yeastPercentage / 100));
  }, [flour, yeastPercentage]);

  const handleReset = () => {
    setFlour(initialFlour);
    setWater(initialWater);
    setSalt(flour * (initialSaltPercentage / 100));
    setYeast(flour * (initialYeastPercentage / 100));
    setHydration(initialHydration);
    setSaltPercentage(initialSaltPercentage);
    setYeastPercentage(initialYeastPercentage);
    setYeastType("dry");
  };

  const handleYeastTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYeastType(e.target.value);
    if (e.target.value === "dry") {
      setYeast(initialFlour * (initialYeastPercentage / 100));
      setYeastPercentage(initialYeastPercentage);
    } else if (e.target.value === "fresh") {
      setYeast(initialFlour * (2 / 100));
      setYeastPercentage(2);
    } else if (e.target.value === "sourdough") {
      setYeast(initialFlour * (15 / 100));
      setYeastPercentage(15);
    }
  };

  return (
    <div className="w-full max-w-lg">
      <div className="min-w-max bg-white shadow-md rounded m-10 p-6">
        <h1 className="block text-gray-700 text-md font-semibold mb-2">Bread Dough Calculator</h1>
        <div className="mb-4 input-container">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Flour</label>
          <div className="relative w-28">
            <input
              type="number"
              className="shadow appearance-none border rounded w-28 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={flour.toFixed(0)}
              onChange={(e) => setFlour(Number(e.target.value))}
            />
            <span className="absolute bottom-3 end-2 text-gray-500 text-xs">
              grams
            </span>
          </div>
        </div>
        <div className="mb-4 input-container">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Water</label>
          <div className="relative w-28">
            <input
              type="number"
              className="shadow appearance-none border rounded w-28 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={water.toFixed(0)}
              onChange={(e) => setWater(Number(e.target.value))}
              readOnly
            />
            <span className="absolute bottom-3 end-2 text-gray-500 text-xs">
              grams
            </span>
        </div>
        </div>
        <div className="mb-4 input-container">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Salt</label>
          <div className="relative w-28">
            <input
              type="number"
              className="shadow appearance-none border rounded w-28 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={salt.toFixed(0)}
              onChange={(e) => setSalt(Number(e.target.value))}
              readOnly
            />
            <span className="absolute bottom-3 end-2 text-gray-500 text-xs">
              grams
            </span>
          </div>
        </div>
        <div className="mb-4 input-container">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Yeast</label>
          <div className="relative w-28">
            <input
              type="number"
              className="shadow appearance-none border rounded w-28 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={yeast.toFixed(0)}
              onChange={(e) => setYeast(Number(e.target.value))}
              readOnly
            />
            <span className="absolute bottom-3 end-2 text-gray-500 text-xs">
              grams
            </span>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="font-semibold mb-2">Options</h2>
          <div className="mb-2">
            <label className="block mb-1">Hydration: {hydration}%</label>
            <input
              type="range"
              min={0}
              max={100}
              value={hydration}
              onChange={(e) => setHydration(Number(e.target.value))}
              className="w-full bg-gray-800"
            />
          </div>
          <div className="mb-2">
            <label className="block mb-1">Salt Percentage: {saltPercentage}%</label>
            <input
              type="range"
              min={0.5}
              max={3}
              step={0.1}
              value={saltPercentage}
              onChange={(e) => setSaltPercentage(Number(e.target.value))}
              className="w-full bg-gray-800"
            />
          </div>
          <div className="mb-2">
            <label className="block mb-1">
              {yeastType === "dry"
                ? `Yeast Percentage: ${yeastPercentage}%`
                : yeastType === "fresh"
                ? `Yeast Percentage: ${yeastPercentage}%`
                : `Starter Percentage: ${yeastPercentage}%`}
            </label>
            <input
              type="range"
              min={yeastType === "dry" ? 0.3 : yeastType === "fresh" ? 0.7 : 10}
              max={yeastType === "dry" ? 2.5 : yeastType === "fresh" ? 5 : 50}
              step={yeastType === "dry" ? 0.1 : yeastType === "fresh" ? 0.1 : 1}
              value={yeastPercentage}
              onChange={(e) => setYeastPercentage(Number(e.target.value))}
              className="w-full bg-gray-800"
            />
          </div>
          <div className="mb-2">
            <label className="block mb-1">Yeast Type:</label>
            <label className="block mb-1">
              <input
                type="checkbox"
                value="dry"
                checked={yeastType === "dry"}
                onChange={handleYeastTypeChange}
              />
              &nbsp;Dry Yeast
            </label>
            <label className="block mb-1">
              <input
                type="checkbox"
                value="fresh"
                checked={yeastType === "fresh"}
                onChange={handleYeastTypeChange}
              />
              &nbsp;Fresh Yeast
            </label>
            <label className="block mb-1">
              <input
                type="checkbox"
                value="sourdough"
                checked={yeastType === "sourdough"}
                onChange={handleYeastTypeChange}
              />
              &nbsp;Sourdough Starter
            </label>
          </div>
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white mt-2 py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

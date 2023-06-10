
'use client'
import { useState, useEffect } from "react";
import "node_modules/flag-icons/css/flag-icons.min.css";

export default function BreadPage() {
  // Initial values for the bread dough ingredients.
  const initialFlour = 500;
  const initialWater = 350;
  const initialSaltPercentage = 2;
  const initialYeastPercentage = 1.4;
  const initialHydration = 70;

  // States for the bread dough ingredients.
  const [flour, setFlour] = useState(initialFlour);
  const [water, setWater] = useState(initialWater);
  const [salt, setSalt] = useState(flour * (initialSaltPercentage / 100));
  const [yeast, setYeast] = useState(flour * (initialYeastPercentage / 100));
  const [hydration, setHydration] = useState(initialHydration);
  const [saltPercentage, setSaltPercentage] = useState(initialSaltPercentage);
  const [yeastPercentage, setYeastPercentage] = useState(initialYeastPercentage);
  const [yeastType, setYeastType] = useState("dry");

  // State for the language.
  const [language, setLanguage] = useState("english");

  // Set the hydration percentage.
  useEffect(() => {
    setWater(flour * (hydration / 100));
  }, [flour, hydration]);

  // Set the salt percentage.
  useEffect(() => {
    setSalt(flour * (saltPercentage / 100));
  }, [flour, saltPercentage]);

  // Set the yeast percentage.
  useEffect(() => {
    setYeast(flour * (yeastPercentage / 100));
  }, [flour, yeastPercentage]);

  // Reset all values to their initial values.
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

  // Switch the yeast type and set the yeast amount accordingly.
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

  // Switch between languages.
  const handleLanguageSwitch = () => {
    const newLanguage = language === "english" ? "icelandic" : "english";
    setLanguage(newLanguage);
  };

  // Variables for all the text, to be able to flip between languages.
  const titleText = language === "english" ? "Bread Dough Calculator" : "Reiknivél Fyrir Brauðdeig"
  const gramsText = language === "english" ? "grams" : "grömm";
  const flourText = language === "english" ? "Flour" : "Hveiti";
  const waterText = language === "english" ? "Liquid" : "Vökvi";
  const optionsText = language === "english" ? "Options" : "Valmöguleikar";
  const hydrationLabelText = language === "english" ? "Hydration" : "Vökvahlutfall";
  const saltPercentageText = language === "english" ? "Salt Percentage" : "Salthlutfall";
  const yeastPercentageText = language === "english" ? "Yeast Percentage" : "Gerhlutfall";
  const sourdoughPercentageText = language === "english" ? "Sourdough Percentage" : "Súrdeigshlutfall";
  const saltLabelText = language === "english" ? "Salt" : "Salt";
  const yeastLabelText = language === "english" ? "Yeast" : "Ger";
  const yeastTypeText = language === "english" ? "Yeast Type" : "Gertegund";
  const dryYeastText = language === "english" ? "Dry Yeast" : "Þurrger";
  const freshYeastText = language === "english" ? "Fresh Yeast" : "Pressuger";
  const sourdoughText = language === "english" ? "Sourdough" : "Súrdeig";
  const resetText = language === "english" ? "Reset" : "Endurræsa";

  return (
    <div className="w-full max-w-lg">
      <div className="min-w-max bg-white shadow-md rounded m-5 p-5">
        <h1 className="block text-gray-700 text-md font-semibold mb-2">{titleText}</h1>
        <div className="mb-4 input-container">
          <label className="block text-gray-700 text-sm font-semibold mb-2">{flourText}</label>
          <div className="relative w-28">
            <input
              type="number"
              className="shadow appearance-none border rounded w-28 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={flour.toFixed(0)}
              onChange={(e) => setFlour(Number(e.target.value))}
            />
            <span className="absolute bottom-3 end-2 text-gray-500 text-xs">
            {gramsText}
            </span>
          </div>
        </div>
        <div className="mb-4 input-container">
          <label className="block text-gray-700 text-sm font-semibold mb-2">{waterText}</label>
          <div className="relative w-28">
            <input
              type="number"
              className="shadow appearance-none border rounded w-28 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={water.toFixed(0)}
              onChange={(e) => setWater(Number(e.target.value))}
              readOnly
            />
            <span className="absolute bottom-3 end-2 text-gray-500 text-xs">
            {gramsText}
            </span>
        </div>
        </div>
        <div className="mb-4 input-container">
          <label className="block text-gray-700 text-sm font-semibold mb-2">{saltLabelText}</label>
          <div className="relative w-28">
            <input
              type="number"
              className="shadow appearance-none border rounded w-28 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={salt.toFixed(0)}
              onChange={(e) => setSalt(Number(e.target.value))}
              readOnly
            />
            <span className="absolute bottom-3 end-2 text-gray-500 text-xs">
            {gramsText}
            </span>
          </div>
        </div>
        <div className="mb-4 input-container">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            {yeastType === "sourdough" ? sourdoughText : yeastLabelText}
          </label>
          <div className="relative w-28">
            <input
              type="number"
              className="shadow appearance-none border rounded w-28 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={yeast.toFixed(0)}
              onChange={(e) => setYeast(Number(e.target.value))}
              readOnly
            />
            <span className="absolute bottom-3 end-2 text-gray-500 text-xs">
            {gramsText}
            </span>
          </div>
        </div>
        <div className="mb-4">
        <h1 className="block text-gray-700 text-md font-semibold mb-2">{optionsText}</h1>
          <div className="mb-2">
            <label className="block mb-1">{hydrationLabelText}: {hydration}%</label>
            <input
              type="range"
              min={40}
              max={110}
              value={hydration}
              onChange={(e) => setHydration(Number(e.target.value))}
              className="w-full bg-gray-800"
            />
          </div>
          <div className="mb-2">
            <label className="block mb-1">{saltPercentageText}: {saltPercentage}%</label>
            <input
              type="range"
              min={1.5}
              max={2.5}
              step={0.1}
              value={saltPercentage}
              onChange={(e) => setSaltPercentage(Number(e.target.value))}
              className="w-full bg-gray-800"
            />
          </div>
          <div className="mb-2">
            <label className="block mb-1">
              {yeastType === "dry"
                ? `${yeastPercentageText}: ${yeastPercentage}%`
                : yeastType === "fresh"
                ? `${yeastPercentageText}: ${yeastPercentage}%`
                : `${sourdoughPercentageText}: ${yeastPercentage}%`}
            </label>
            <input
              type="range"
              min={yeastType === "dry" ? 0.3 : yeastType === "fresh" ? 0.7 : 2}
              max={yeastType === "dry" ? 2.5 : yeastType === "fresh" ? 5 : 50}
              step={yeastType === "dry" ? 0.1 : yeastType === "fresh" ? 0.1 : 1}
              value={yeastPercentage}
              onChange={(e) => setYeastPercentage(Number(e.target.value))}
              className="w-full bg-gray-800"
            />
          </div>
          <div className="mb-2">
            <label className="block mb-1">{yeastTypeText}:</label>
            <label className="block mb-1">
              <input
                type="checkbox"
                value="dry"
                checked={yeastType === "dry"}
                onChange={handleYeastTypeChange}
              />
              &nbsp;{dryYeastText}
            </label>
            <label className="block mb-1">
              <input
                type="checkbox"
                value="fresh"
                checked={yeastType === "fresh"}
                onChange={handleYeastTypeChange}
              />
              &nbsp;{freshYeastText}
            </label>
            <label className="block mb-1">
              <input
                type="checkbox"
                value="sourdough"
                checked={yeastType === "sourdough"}
                onChange={handleYeastTypeChange}
              />
              &nbsp;{sourdoughText}
            </label>
          </div>
          <div className="relative w-full">
            <button
              className="bg-transparent text-gray-800 mt-2 py-2 px-4 border border-gray-400 rounded shadow"
              onClick={handleReset}
            >
              {resetText}
            </button>
            <button
              className="bg-transparent absolute bottom-0 end-2 rounded-full shadow"
              onClick={handleLanguageSwitch}
            >
              <span className={`fi fis ${language === "english" ? "fi-is" : "fi-gb"} fiCircle`} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

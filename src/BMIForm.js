import React,{useState} from "react";
import "./BMIForm.css";
const BMIForm = () => {
  const [editWeight,setWeight]=useState("");
  const [editHeight,setHeight]=useState("");
  const [status,setStatus]=useState("");
  const [bmiResult,setResult]=useState(null);
  const ediitWieghtandler = (e) =>{
      setWeight(e.target.value);
  }
  const editHeightHandler = (e) =>{
    setHeight(e.target.value);
  }
  const calculateBMI = () =>{
    if(editWeight==="" && editHeight===""){
      alert ("Please enter height and weight!")
    }else{
      let bmi = Number(editWeight / (editHeight / 100) ** 2).toFixed(2);
      setResult(bmi);
      let bmiStatus = getStatus(bmi);
      setStatus(bmiStatus);
      setHeight("");
      setWeight("");
    
    }
   }
  function getStatus(bmi) {
    if (bmi < 18.5) return "Underweight";
    else if (bmi >= 18.5 && bmi < 24.9) return "Normal";
    else if (bmi >= 25 && bmi < 29.9) return "Overweight";
    else return "Obese";
  }

  return (
    <div
      className="h-screen flex flex-col 
    items-center justify-center "
    >
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-green-700 text-xl mb-3 text-2xl">BMI CALCULATOR</h1>
        <label
          for="weight"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Weight
        </label>
        <input
          type="text"
          placeholder="Enter the weight in kg"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={editWeight}
          onChange={ediitWieghtandler}
    />
        <label
          for="weight"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Height
        </label>
        <input
          type="text"
          placeholder="Enter the height in cm"
          className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-50::placeholder"
          value={editHeight}
          onChange={editHeightHandler}
      />
        <button
          type="button"
          className="bg-green-800 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={calculateBMI}
        >
          Calculate BMI
        </button>
        
        {bmiResult && (
          <div className="mt-4">
            <p className="text-xl text-yellow-500">Your BMI is: {bmiResult} </p>
            <p className="text-xl text-yellow-500">You are currently: {status}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default BMIForm;

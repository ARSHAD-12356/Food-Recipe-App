import React, { useState } from "react";
import { useParams } from "react-router-dom";
// useParams Hook:--- ye wo hook hota hai jo bhi url k andr path k andr jo parameter aata hai usko get krke deta hai useParam hook k andr hota hai

const Mealinfo = () => {
  const { mealid } = useParams();
  console.log(mealid);

  // store recepie info in the info props using useState
  const [info, setinfo] = useState();

  const getInfo = async () => {
    const get = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
    );
    const jsonData = await get.json();
    console.log(jsonData.meals[0]);
    setinfo(jsonData.meals[0]);
  };
  if (info != "") {
    getInfo();
  }

  return (
    <div>
      <style>
        {`
          @media (max-width: 768px) {
            .mealInfo {
              flex-direction: column;
              align-items: center;
              text-align: center;
            }
            .mealInfo img {
              width: 100%;
              height: auto;
            }
            .info {
              padding: 10px;
            }
            .info h1 {
              font-size: 20px;
            }
            .info button {
              width: 100%;
              margin: 10px 0;
            }
            .info p {
              font-size: 14px;
            }
          }
        `}
      </style>
      {!info ? (
        "Data Not Found"
      ) : (
        <div className="mealInfo">
          <img src={info.strMealThumb} alt="" />
          <div className="info">
            <h1>Recipe Details</h1>
            <button>{info.strMeal}</button>
            <h3>Instruction's</h3>
            <p>{info.strInstructions}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mealinfo;

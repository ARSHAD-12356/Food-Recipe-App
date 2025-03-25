import React, { useState } from "react";
import Mealcards from "./Mealcards";
const MainPage = () => {
  const [data, setdata] = useState();
  const [search, setsearch] = useState("");
  const [msg, setmsg] = useState("");
  ///fetch Api gives us Promises and it may be rejected by server use Async await to handle this problem

  const myApi = async () => {
    if (search == "") {
      setmsg("Please Enter Something");
    } else {
      const get = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const jsonData = await get.json();
      //  console.log(jsonData.meals)
      setdata(jsonData.meals);
      setmsg("");
    }

    console.log(data);
  };

  const handleInput = () => {
    setsearch(event.target.value);
  };

  return (
    <>
      <style>
        {`
        @media (max-width: 768px) {
          .container {
            padding: 10px;
          }
          .searchBar {
            flex-direction: column;
            align-items: stretch;
          }
          .searchBar input {
            width: 100%;
            margin-bottom: 10px;
          }
          .searchBar button {
            width: 100%;
          }
          .mealImg {
            width: 100%;
            height: auto;
          }
          .error {
            font-size: 14px;
          }
        }
      `}
      </style>
      <h1 className="head">FOOD RECIPE APP</h1>
      <div className="container">
        <div className="searchBar">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Your Dishes"
            onChange={handleInput}
          />
          <button onClick={myApi}>Search</button>
        </div>
        <h4 className="error">{msg}</h4>
        <div>
          <Mealcards detail={data} className="mealImg" />
        </div>
      </div>
    </>
  );
};

export default MainPage;

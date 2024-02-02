import React, { useState } from "react";
import axios from "axios";
// import "../../styles/Nutrition.css";
import NutritionCard from "./NutritionItem.js";

const Nutrition = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [nutritionData, setNutritionData] = useState(null);

  const fetchData = async () => {
    const apiKey = "YBfXKFNgp2fhGfPVd4UFfA==SzR9SeAJeiHL4269";

    try {
      const response = await axios.get(
        `https://api.calorieninjas.com/v1/nutrition?query=${searchTerm}`,
        {
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": apiKey,
          },
        }
      );

      const firstItem = response.data.items[0];
      setNutritionData(firstItem);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    // <div className="main">
    //   <div className="heading">
    //     <h1 className="search-heading">Search Nutrition in Your Food</h1>
    //   </div>
    //   <div className="searchBox">
    //     <input
    //       type="search"
    //       className="search-bar"
    //       placeholder="Type the food item..."
    //       onChange={(e) => setSearchTerm(e.target.value)}
    //       value={searchTerm}
    //       onKeyPress={(e) => {
    //         if (e.key === "Enter") fetchData();
    //       }}
    //     />
    //   </div>
    //   <div className="container">
    //     {nutritionData ? (
    //       <div>
    //         <p className="showing-nutrition">
    //           Showing nutrition for: {nutritionData.name}
    //         </p>
    //         <NutritionCard {...nutritionData} />
    //       </div>
    //     ) : (
    //       <p className="notSearch">Not found</p>
    //     )}
    //   </div>
    // </div>

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
  <div style={{ maxWidth: '800px', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
    <div style={{ marginBottom: '20px' }}>
      <h1 style={{ marginBottom: '20px' }}>Search Nutrition in Your Food</h1>
    </div>
    <div>
      <input
        type="search"
        style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
        placeholder="Type the food item..."
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        onKeyPress={(e) => {
          if (e.key === "Enter") fetchData();
        }}
      />
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      {nutritionData ? (
        <div style={{ maxWidth: '400px', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <p style={{ fontWeight: 'bold' }}>
            Showing nutrition for: {nutritionData.name}
          </p>
          <NutritionCard {...nutritionData} />
        </div>
      ) : (
        <p style={{ fontStyle: 'italic', color: '#999' }}>Not found</p>
      )}
    </div>
  </div>
</div>

  );
};

export default Nutrition;
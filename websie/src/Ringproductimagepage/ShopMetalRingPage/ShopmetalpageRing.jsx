import React from "react";
import "./ShopmetalPage.css";

const ShopmetalpageRing = () => {
  const caratGold = [
    {
      id: "1",
      Carat: "14K",
      cName: "White Gold",
    },
    {
      id: "2",
      Carat: "18K",
      cName: "White Gold",
    },
    {
      id: "3",
      Carat: "14K",
      cName: "Yellow Gold",
    },
    {
      id: "4",
      Carat: "18K",
      cName: "Yellow Gold",
    },
    {
      id: "5",
      Carat: "PLA",
      cName: "PLATINUM",
    },
    {
      id: "6",
      Carat: "14K",
      cName: "Rose Gold",
    },
    {
      id: "7",
      Carat: "18K",
      cName: "Rose Gold",
    },
    {
      id: "8",
      Carat: "925",
      cName: "Silver",
    },
  ];

  const getBackgroundColor = (id) => {
    switch (id) {
      case "1":
        return { borderColor: "#b2b2b2" };
      case "2":
        return { borderColor: "#848484" };
      case "3":
        return { borderColor: "#dbc47e" };
      case "4":
        return { borderColor: "#c9a63a" };
      case "5":
        return { borderColor: "#AEAEAE" };
      case "6":
        return { borderColor: "#FBADAD" };
      case "7":
        return { borderColor: "#fbadad" };
      case "8":
        return { borderColor: "silver" };
      
    }
  };

  return (
    <>
      <div className="shop-matal-in-ring">
        <h4> Shop By Metal </h4>
        <p>
          {" "}
          Our metals are the perfect blend of strength and allure. <br />
          Choose a guardian metal you want for the protection of your gemstone.{" "}
        </p>
      </div>

      <div className="div-ring-matel-gold">
        {caratGold.map((item, index) => (
          <div className="div-ring-gold-carat" key={index}>
            <div className="gold-carat-ring-page" style={getBackgroundColor(item.id)}>
              <strong className="caratgoldinring">{item.Carat}</strong>
            </div>
            <p className="white-gold-in-ring-page">{item.cName}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShopmetalpageRing;

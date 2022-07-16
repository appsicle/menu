import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import MenuInput from "./menuInput/MenuItemInputContainer";
import MenuRender from "./menuRender/MenuRender";
import { useState } from "react";
import FoodCard from "./components/FoodCard";

function App() {
  const [menuItems, setMenuItems] = useState([]);

  const publishMenuItems = (menuItem) => {
    setMenuItems([...menuItems, menuItem]);
    console.log(menuItems);
  };

  return (
    <>
      <header></header>
      <body>
       <FoodCard title={"Dan Dan Noodle"} description={"A Szechuan specialty, Dan Dan Noodles is a fan favorite. The crispy, spicy, and numbing peppercorn elevates the flavor to a whole 'nother level."} price={"$12.00"} imgSrc={"https://picsum.photos/200"}/>
        <div className="main-container">
          <MenuInput publishMenuItems={publishMenuItems} />
          <MenuRender menuItems={menuItems} />
        </div>
      </body>
    </>
  );
}

export default App;

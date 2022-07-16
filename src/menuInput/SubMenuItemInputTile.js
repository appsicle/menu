import {
  Card,
  CardTitle,
  CardBody,
} from "shards-react";
import { useState } from "react";
import { ListGroupItem } from "shards-react";
import { FaEdit } from "react-icons/fa";
import SubMenuInputTileForm from "./SubMenuItemInputTileForm";
import "./MenuItemInputTile.css";
import FoodCard from "../components/FoodCard";

function SubMenuInputTile({ headingName, publishMenuItems }) {
  const [isEdit, setIsEdit] = useState(false);
  const [items, setItems] = useState([]);

  const addMenuItem = (name, description, price) => {
    const cardObj = {
      headingName,
      name,
      description,
      price,
    };
    console.log(cardObj);
    setItems([...items, cardObj]);
    publishMenuItems(cardObj);
  };

  return (
    <div>
      <div>
        {items.length
          ? items.map((item) => (
            <FoodCard title={item.name} description={item.description} price={item.price}/>
              // <Card>
              //   <CardBody>
              //   <CardTitle>{item.name}</CardTitle>
              //     <p>{item.description}</p>
              //     <p>{item.price}</p>
              //   </CardBody>
              // </Card>
            ))
          : null}
      </div>
      <div className="menu-input-tile">
        {isEdit ? (
          <SubMenuInputTileForm publishMenuItems={addMenuItem} />
        ) : (
          <ListGroupItem>blank</ListGroupItem>
        )}
        <span onClick={() => setIsEdit(!isEdit)}>
          <FaEdit />
        </span>
      </div>
    </div>
  );
}

export default SubMenuInputTile;

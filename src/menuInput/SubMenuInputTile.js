import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button,
} from "shards-react";
import { useState } from "react";
import { ListGroup, ListGroupItem } from "shards-react";
import { FaEdit, FaList } from "react-icons/fa";
import SubMenuInputTileForm from "./SubMenuInputTileForm";
import "./MenuInputTile.css";

function MenuInputTile() {
  const [isEdit, setIsEdit] = useState(false);
  const [items, setItems] = useState([]);

  const createCard = (name, description, price) => {
    const cardObj = {
      name,
      description,
      price,
    };
    setItems([...items, cardObj]);
  };

  return (
    <div>
      <div>
        {items.length
          ? items.map((item) => (
              <Card>
                <CardBody>
                <CardTitle>{item.name}</CardTitle>
                  <p>{item.description}</p>
                  <p>{item.price}</p>
                </CardBody>
              </Card>
            ))
          : null}
      </div>
      <div className="menu-input-tile">
        {isEdit ? (
          <SubMenuInputTileForm onSave={createCard} />
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

export default MenuInputTile;

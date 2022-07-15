import { FormInput, Button, Collapse } from "shards-react";
import { useState } from "react";
import { ListGroup, ListGroupItem } from "shards-react";
import { FaEdit, FaList } from "react-icons/fa";
import SubMenuInputTile from './SubMenuInputTile';
import "./MenuInputTile.css";

function MenuInputTile() {
  const [isEdit, setIsEdit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [headingName, setHeadingName] = useState("Entree");

  return (
    <div>
      <div className="menu-input-tile">
        {isEdit ? (
          <FormInput
            onChange={(event) => {
              setHeadingName(event.target.value);
            }}
            placeholder={headingName}
          />
        ) : (
          <ListGroupItem>{headingName}</ListGroupItem>
        )}
        <span onClick={() => setIsEdit(!isEdit)}>
          <FaEdit />
        </span>
        <span onClick={() => setIsOpen(!isOpen)}>
          <FaList />
        </span>
      </div>
      <Collapse open={isOpen}>
        <SubMenuInputTile />
      </Collapse>
    </div>
  );
}

export default MenuInputTile;

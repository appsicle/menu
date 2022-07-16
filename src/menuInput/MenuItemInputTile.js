import { FormInput, Collapse } from "shards-react";
import { useState } from "react";
import { ListGroupItem } from "shards-react";
import { FaEdit, FaList } from "react-icons/fa";
import SubMenuInputTile from './SubMenuItemInputTile';
import "./MenuItemInputTile.css";

function MenuInputTile({ publishMenuItems }) {
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
        <SubMenuInputTile headingName={headingName} publishMenuItems={publishMenuItems} />
      </Collapse>
    </div>
  );
}

export default MenuInputTile;

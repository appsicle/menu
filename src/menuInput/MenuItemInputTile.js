import { FormInput, Collapse } from "shards-react";
import { useState } from "react";
import { ListGroupItem, Button } from "shards-react";
import { FaEdit, FaList } from "react-icons/fa";
import SubMenuInputTile from "./SubMenuItemInputTile";
import "./MenuItemInputTile.scss";
import { Nav, NavItem, NavLink } from "shards-react";

function MenuInputTile({ id, name, setName, publishMenuItems }) {
  // const [isEdit, setIsEdit] = useState(false);
  // const [isOpen, setIsOpen] = useState(true);
  // const [headingName, setHeadingName] = useState(name);

  return (
    <div>
      <div className="menu-input-tab-field-container">
        <input
          className="menu-input-tab-field"
          onChange={(event) => {
            setName(id, event.target.value);
          }}
          placeholder={name}
        />
      </div>
    </div>
  );
}

export default MenuInputTile;

import {
  FormInput,
  Form,
  FormGroup,
  FormTextarea,
  Button,
  Collapse,
} from "shards-react";
import { useState } from "react";
import { ListGroup, ListGroupItem } from "shards-react";
import { FaEdit, FaList } from "react-icons/fa";
import "./MenuInputTile.css";

function MenuInputTile() {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState("");

  return (
    <div>
      <div className="menu-input-tile">
        {isEdit ? (
          <Form>
            <FormGroup>
              <label htmlFor="#username">Name</label>
              <FormInput id="#username" placeholder="Username" />
            </FormGroup>
            <FormGroup>
              <label htmlFor="#username">Description</label>
              <FormTextarea
                onChange={() => {
                  console.log("ad");
                }}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="#username">Price</label>
              <FormInput id="#username" placeholder="Username" />
            </FormGroup>
          </Form>
        ) : (
          <ListGroupItem>{name}</ListGroupItem>
        )}
        <span onClick={() => setIsEdit(!isEdit)}>
          <FaEdit />
        </span>
      </div>
    </div>
  );
}

export default MenuInputTile;

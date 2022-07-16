import { useState } from "react";
import {
  FormInput,
  Form,
  FormGroup,
  FormTextarea,
  Button,
} from "shards-react";

export default function SubMenuInputTileForm({ publishMenuItems }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const isFormFilled = name && description && price;

  const onSubmitForm = () => {
    publishMenuItems(name, description, price);
    setName("");
    setDescription("");
    setPrice("");
  };

  return (
    <Form>
      <FormGroup>
        <label>Name</label>
        <FormInput
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </FormGroup>
      <FormGroup>
        <label>Description</label>
        <FormTextarea
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
      </FormGroup>
      <FormGroup>
        <label>Price</label>
        <FormInput
          value={price}
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
      </FormGroup>
      <Button disabled={!isFormFilled} onClick={onSubmitForm}>
        Add
      </Button>
    </Form>
  );
}

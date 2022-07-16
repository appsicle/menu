import { Button } from "shards-react";
import { useState } from "react";
import MenuInputTile from "./MenuItemInputTile";

function MenuInput({ publishMenuItems }) {
  const [numHeadingFields, setNumHeadingFields] = useState(3);
  return (
    <div>
      <div>
        {Array.from({ length: numHeadingFields }, (_, i) => (
          <MenuInputTile publishMenuItems={publishMenuItems} />
        ))}
      </div>
      <Button
        onClick={() => {
          setNumHeadingFields(numHeadingFields + 1);
        }}
      >
        Add Heading
      </Button>
    </div>
  );
}

export default MenuInput;

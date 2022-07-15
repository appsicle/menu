import { FormInput, Button } from "shards-react";
import { useState } from "react";
import MenuInputTile from "./MenuInputTile";

const startingData = [
  {
    id: 0,
    headingName: "Appetizers",
    foods: [],
  },
  {
    id: 1,
    headingName: "Entrees",
    foods: [],
  },
  {
    id: 2,
    headingName: "Desserts",
    foods: [],
  },
];

function MenuInput() {
  const [numHeadingFields, setNumHeadingFields] = useState(startingData.length);
  return (
    <div>
      <div>
        {Array.from({ length: numHeadingFields }, (_, i) => (
          <MenuInputTile />
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

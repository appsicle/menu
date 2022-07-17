import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import MenuInput from "./menuInput/MenuItemInputContainer";
import MenuRender from "./menuRender/MenuRender";
import { useState } from "react";
import FoodCard from "./components/FoodCard";
import DragAndDropContainer from "./components/DragAndDropContainer";
import { Button } from "shards-react";
import { arrayMove } from "@dnd-kit/sortable";
import { findNextId, indexOfId } from "./utils";

const initialHeader = {
  id: 1,
  name: "Untitled Item",
};

function App() {
  const [menuItems, setMenuItems] = useState([]);
  const [headerItems, setHeaderItems] = useState([initialHeader]);

  const publishMenuItems = (menuItem) => {
    setMenuItems([...menuItems, menuItem]);
  };

  const addHeader = () => {
    const id = findNextId(headerItems);
    const newObj = {
      id,
      name: "",
    };
    setHeaderItems([...headerItems, newObj]);
  };

  function handleDragEnd(event) {
    const { active, over } = event;
    if (active.id !== over.id) {
      setHeaderItems((items) => {
        const oldIndex = indexOfId(active.id, items);
        const newIndex = indexOfId(over.id, items);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  function handleSetName(id, newName) {
    const idx = indexOfId(id, headerItems);
    const copy = [...headerItems];
    copy[idx].name = newName;
    setHeaderItems(copy);
  }

  return (
    <>
      <header></header>
      <body>
        <div className="main-menu-input-container">
          {headerItems.length ? (
            <DragAndDropContainer
              setName={handleSetName}
              items={headerItems}
              handleDragEnd={handleDragEnd}
            />
          ) : null}
          <Button onClick={addHeader}>Add new</Button>
        </div>
      </body>
    </>
  );
}

export default App;

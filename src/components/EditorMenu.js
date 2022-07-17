import { SortableMenu } from "./SortableMenu";
import "./EditorMenu.scss";

export default function EditorMenu({ items, setName }) {
  return (
    <div className="editor-menu-container">
      {items.map((item) => (
        <SortableMenu setName={setName} key={item.id} id={item.id} name={item.name} />
      ))}
    </div>
  );
}

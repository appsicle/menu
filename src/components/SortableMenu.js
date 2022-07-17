import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import MenuInputTile from "../menuInput/MenuItemInputTile";
import { Nav, NavItem, NavLink } from "shards-react";

export function SortableMenu({ id, name, setName }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <MenuInputTile id={id} name={name} setName={setName} />
    </div>
  );
}

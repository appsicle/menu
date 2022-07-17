import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import EditorMenu from "./EditorMenu";
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers";

export default function DragAndDropContainer({ items, handleDragEnd, setName }) {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        delay: 250,
      },
    }),
  );

  return (
    <DndContext
      modifiers={[restrictToHorizontalAxis]}
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      restrictToHorizontalAxis={true}
    >
      <SortableContext items={items} strategy={horizontalListSortingStrategy}>
        <EditorMenu setName={setName} items={items} />
      </SortableContext>
    </DndContext>
  );
}

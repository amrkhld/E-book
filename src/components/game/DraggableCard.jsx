// src/components/game/DraggableCard.jsx

import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export default function DraggableCard({ id, image, label, shake }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`game-card ${shake ? "shake" : ""}`}
      {...listeners}
      {...attributes}
    >
      {image ? <img src={image} alt={label || ""} /> : <span className="card-label">{label}</span>}
    </div>
  );
}


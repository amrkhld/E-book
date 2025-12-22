// src/components/game/DropTarget.jsx

import { useDroppable } from "@dnd-kit/core";

export default function DropTarget({ id, label, accepts = [], filledItems = [] }) {
  const { setNodeRef, isOver } = useDroppable({ id });
  const max = accepts.length || undefined;
  const isFull = max ? filledItems.length >= max : false;

  return (
    <div
      ref={setNodeRef}
      className={`drop-target ${isOver ? "hovered" : ""} ${filledItems.length ? "filled" : ""} ${isFull ? "full" : ""}`}
    >
      <div className="target-header">
        <span>{label}</span>
        {max && <span className="target-count">{filledItems.length}/{max}</span>}
      </div>
      {filledItems.length > 0 && (
        <div className="target-items">
          {filledItems.map(item => (
            <div key={item.id} className="target-item">
              {item.image ? (
                <img src={item.image} alt={item.label} />
              ) : (
                <span className="target-pill">{item.label}</span>
              )}
              <span className="target-item-label">{item.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}



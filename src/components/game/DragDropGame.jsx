// src/components/game/DragDropGame.jsx

import { DndContext } from "@dnd-kit/core";
import { useState, useEffect } from "react";
import DraggableCard from "./DraggableCard";
import DropTarget from "./DropTarget";
import Confetti from "react-confetti";
import successSound from "../../assets/sounds/success.mp3";
import correctSound from "../../assets/sounds/correct.mp3";
import wrongSound from "../../assets/sounds/wrong.mp3";
import useSound from "../../hooks/useSound";
import "./game.css";


export default function DragDropGame({ game, onFinish }) {
  const [placements, setPlacements] = useState({});
  const [shakeId, setShakeId] = useState(null);

  const playSuccess = useSound(successSound, 0.4);
  const playCorrectDrop = useSound(correctSound, 0.6);
  const playWrongDrop = useSound(wrongSound, 0.6);

  const totalPlaced = Object.values(placements).reduce(
    (sum, arr) => sum + arr.length,
    0
  );
  const completed = totalPlaced === game.draggables.length;

  function handleDragEnd(event) {
    const { active, over } = event;
    if (!over) return;

    const target = game.targets.find(t => t.id === over.id);
    if (!target) return;

    const alreadyPlaced = Object.values(placements).some(arr =>
      arr.includes(active.id)
    );
    if (alreadyPlaced) return;

    const accepts = target.accepts || [target.id];
    const targetPlacements = placements[target.id] || [];
    const targetIsFull =
      accepts.length && targetPlacements.length >= accepts.length;

    if (accepts.includes(active.id) && !targetIsFull) {
      setPlacements(prev => ({
        ...prev,
        [target.id]: [...(prev[target.id] || []), active.id]
      }));
      playCorrectDrop();
    } else {
      setShakeId(active.id);
      playWrongDrop();
      setTimeout(() => setShakeId(null), 400);
    }
  }

  useEffect(() => {
    if (completed) {
      playSuccess();
    }
  }, [completed]);

  return (
    <DndContext onDragEnd={completed ? undefined : handleDragEnd}>
      <div className={`game-wrapper ${completed ? "completed" : ""}`}>

        {completed && <Confetti numberOfPieces={140} style={{ zIndex: "20" }} />}

        <h2 className="game-title">{game.prompt}</h2>

        <div className="draggables-row">
          {game.draggables.map(item =>
            !Object.values(placements).some(arr => arr.includes(item.id)) && (
              <DraggableCard
                key={item.id}
                id={item.id}
                label={item.label}
                image={item.image}
                shake={shakeId === item.id}
              />
            )
          )}
        </div>

        <div className="targets-row">
          {game.targets.map(target => {
            const filledItems = (placements[target.id] || [])
              .map(id => game.draggables.find(d => d.id === id))
              .filter(Boolean);

            return (
              <DropTarget
                key={target.id}
                id={target.id}
                label={target.label}
                accepts={target.accepts}
                filledItems={filledItems}
              />
            );
          })}
        </div>

        {/* SMART OVERLAY */}
        {completed && (
          <div className="game-overlay">
            <div className="congrats-card">
              <h1>Great job 🌟</h1>
              <p>
                You matched all correctly.
                <br />
                Science suits you! 😉
              </p>

              <button
                className="btn orange-btn pop"
                onClick={onFinish}
              >
                Continue
              </button>
            </div>
          </div>
        )}
      </div>
    </DndContext>
  );
}



"use client";

import { useEffect, useRef, useState } from "react";
import { Stage, Layer, Image as KonvaImage, Line } from "react-konva";
import useImage from "use-image";

const GAP = 80;

export default function InteractiveCanvas({ imageUrl }) {
  const stageRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [lines, setLines] = useState([]);
  const isDrawing = useRef(false);
  const [strokeColor, setStrokeColor] = useState("#ef4444");
  const [redoStack, setRedoStack] = useState([]);

  const [backgroundImage] = useImage(imageUrl);

  useEffect(() => {
    if (!backgroundImage) return;

    const updateSize = () => {
      const header = document.querySelector("header");
      const headerHeight = header?.offsetHeight || 0;

      const maxHeight = window.innerHeight - headerHeight - GAP;
      const maxWidth = window.innerWidth - 16; // padding mobile aman

      const ratio = backgroundImage.width / backgroundImage.height;

      let width = maxHeight * ratio;
      let height = maxHeight;

      // 🔥 KUNCI RESPONSIVE MOBILE
      if (width > maxWidth) {
        width = maxWidth;
        height = maxWidth / ratio;
      }

      setSize({
        width: Math.round(width),
        height: Math.round(height),
      });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [backgroundImage]);

  const handleDown = (e) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setRedoStack([]);
    setLines([...lines, { points: [pos.x, pos.y], color: strokeColor }]);
  };

  const handleMove = (e) => {
    if (!isDrawing.current) return;

    const stage = e.target.getStage();
    const point = stage.getPointerPosition();

    const lastLine = lines[lines.length - 1];
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleUp = () => {
    isDrawing.current = false;
  };

  const handleUndo = () => {
    setLines((prev) => {
      if (prev.length === 0) return prev;
      const newLines = prev.slice(0, -1);
      setRedoStack((redo) => [...redo, prev[prev.length - 1]]);
      return newLines;
    });
  };

  const handleRedo = () => {
    setRedoStack((redo) => {
      if (redo.length === 0) return redo;
      const last = redo[redo.length - 1];
      setLines((prev) => [...prev, last]);
      return redo.slice(0, -1);
    });
  };

  if (!size.width || !size.height) return null;

  return (
    <div className="flex justify-center">
      <div className="inline-block" style={{ width: Math.round(size.width) }}>
        <div className="mb-2 flex gap-2 bg-white p-2 rounded shadow-md sticky top-0 z-10">
          {["#ef4444", "#2563eb", "#16a34a", "#000000"].map((color) => (
            <button
              key={color}
              onClick={() => setStrokeColor(color)}
              className="w-8 h-8 rounded-full"
              style={{ backgroundColor: color }}
            />
          ))}

          <button
            onClick={handleUndo}
            disabled={lines.length === 0}
            className="px-3 py-1 text-sm rounded bg-gray-100 disabled:opacity-40"
          >
            Undo
          </button>

          <button
            onClick={handleRedo}
            disabled={redoStack.length === 0}
            className="px-3 py-1 text-sm rounded bg-gray-100 disabled:opacity-40"
          >
            Redo
          </button>
        </div>

        <Stage
          ref={stageRef}
          width={size.width}
          height={size.height}
          onMouseDown={handleDown}
          onMouseMove={handleMove}
          onMouseUp={handleUp}
          onTouchStart={handleDown}
          onTouchMove={handleMove}
          onTouchEnd={handleUp}
          style={{ touchAction: "none" }}
          className="shadow-md"
        >
          <Layer>
            {/* Background funpaper */}
            <KonvaImage
              image={backgroundImage}
              x={0}
              y={0}
              width={size.width}
              height={size.height}
              listening={false}
            />

            {/* Coretan */}
            {lines.map((line, i) => (
              <Line
                key={i}
                points={line.points}
                stroke={line.color}
                strokeWidth={3}
                tension={0.5}
                lineCap="round"
                lineJoin="round"
              />
            ))}
          </Layer>
        </Stage>
      </div>
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";
import { useMousePosition } from "../lib/mouse";

export default function CustomCursor() {
  const { x, y } = useMousePosition();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const show = () => setVisible(true);
    const hide = () => setVisible(false);
    document.addEventListener("mouseenter", show);
    document.addEventListener("mouseleave", hide);
    return () => {
      document.removeEventListener("mouseenter", show);
      document.removeEventListener("mouseleave", hide);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed top-0 left-0 z-[9999] h-4 w-4 rounded-full bg-primary opacity-70 blur-sm transition-transform duration-75 ease-out ${
        visible ? "block" : "hidden"
      }`}
      style={{
        transform: `translate3d(${x - 8}px, ${y - 8}px, 0)`,
      }}
    />
  );
}

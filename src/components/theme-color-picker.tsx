import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const colorThemes = [
  { label: "Default", value: "default", color: "#4b5563" }, // gray-600
  { label: "Pink", value: "pink", color: "#ec4899" }, // pink-500
  { label: "Blue", value: "blue", color: "#3b82f6" }, // blue-500
  { label: "Green", value: "green", color: "#22c55e" }, // green-500

  // // Additional colors
  { label: "Red", value: "red", color: "#ef4444" }, // red-500
  { label: "Yellow", value: "yellow", color: "#eab308" }, // yellow-500
  { label: "Purple", value: "purple", color: "#a855f7" }, // purple-500
  { label: "Orange", value: "orange", color: "#f97316" }, // orange-500
  { label: "Teal", value: "teal", color: "#14b8a6" }, // teal-500
];

export function ThemeColorPicker() {
  const [selectedColor, setSelectedColor] = useState("purple");

  // useEffect(() => {
  //   const savedColor = localStorage.getItem("color-theme") || "default";
  //   setSelectedColor(savedColor);
  //   if (savedColor === "default") {
  //     document.documentElement.removeAttribute("data-color");
  //   } else {
  //     document.documentElement.setAttribute("data-color", savedColor);
  //   }
  // }, []);

  useEffect(() => {
    const saved = localStorage.getItem("color-theme") || "default";
    setSelectedColor(saved);
    applyTheme(saved);
  }, []);

  const applyTheme = (theme: string) => {
    if (theme === "default") {
      document.documentElement.removeAttribute("data-color");
    } else {
      document.documentElement.setAttribute("data-color", theme);
    }
    localStorage.setItem("color-theme", theme);
  };

  // const changeTheme = (color: string) => {
  //   setSelectedColor(color);
  //   localStorage.setItem("color-theme", color);
  //   if (color === "default") {
  //     document.documentElement.removeAttribute("data-color");
  //   } else {
  //     document.documentElement.setAttribute("data-color", color);
  //   }
  // };
  // const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   const newColor = e.target.value;
  //   setSelectedColor(newColor);
  //   localStorage.setItem("color-theme", newColor);
  //   if (newColor === "default") {
  //     document.documentElement.removeAttribute("data-color");
  //   } else {
  //     document.documentElement.setAttribute("data-color", newColor);
  //   }
  // };
  return (
    <Select
      value={selectedColor}
      onValueChange={(val) => {
        setSelectedColor(val);
        applyTheme(val);
      }}
    >
      <SelectTrigger className="w-[150px] text-sm hidden">
        <div className="flex items-center gap-2">
          {/* <span
            className="w-3 h-3 rounded-full"
            style={{
              backgroundColor: colorThemes.find(
                (t) => t.value === selectedColor
              )?.color,
            }}
          /> */}
          <SelectValue placeholder="Theme" />
        </div>
      </SelectTrigger>
      <SelectContent>
        {colorThemes.map((theme) => (
          <SelectItem key={theme.value} value={theme.value}>
            <div className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: theme.color }}
              />
              {theme.label}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

// return (
//   <div className="relative group">
//     <button className="flex items-center gap-2 px-3 py-1 text-sm border rounded bg-background border-border text-foreground">
//       <span
//         className="w-3 h-3 rounded-full"
//         style={{
//           backgroundColor:
//             colorThemes.find((t) => t.value === selectedColor)?.color || "",
//         }}
//       />
//       {colorThemes.find((theme) => theme.value === selectedColor)?.label ??
//         "Default"}
//     </button>
//     <div className="absolute z-50 hidden group-hover:block mt-1 bg-background border border-border rounded shadow-lg w-36">
//       {colorThemes.map((theme) => (
//         <button
//           key={theme.value}
//           onClick={() => {
//             setSelectedColor(theme.value);
//             applyTheme(theme.value);
//           }}
//           className="flex items-center w-full px-3 py-2 text-sm hover:bg-muted text-left"
//         >
//           <span
//             className="w-3 h-3 rounded-full mr-2"
//             style={{ backgroundColor: theme.color }}
//           />
//           {theme.label}
//         </button>
//       ))}
//     </div>
//   </div>
// );

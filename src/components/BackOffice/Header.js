import { useState } from "react";
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className={`h-full ${ open ?"w-full" :"w-1/3"} bg-red-500`}>
      <p className="text-white font-bold">TESTE </p>
      <button className="block bg-slate-500 p-2 rounded-lg" onClick={() => setOpen(!open)}>open</button>
    </div>
  );
}

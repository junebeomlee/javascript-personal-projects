import { useAtom } from "jotai";
import { useState } from "react";
import { Atom1 } from "./jotai";
import "./app.css"

export function App() {
  const [count, setCount] = useState(0);
  const [atom1, setAtom1] = useAtom(Atom1);
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "50vh", width: "100%", background: "black", color: "white", userSelect: "none"}}>
      
      <div className="row">useState</div>
      <div className="row" onClick={() => setCount(prev => prev + 1)}>{count}</div>

      <div className="row">useAtom</div>
      <div className="row" onClick={() => {setAtom1(prev => prev + 1)}}>{atom1}</div>
    </div>

  );
}
import React, { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(mode, replace = false) {
    if (replace) {
      setHistory(prev => [...prev.slice(0, history.length - 1)])
      setHistory(...history, mode)
      setMode(mode);
    } else {
    setMode(mode);
    setHistory([...history, mode])
    }
  }
  
  function back() {
    if (history.length > 1) {
      setHistory(prev => [...prev.slice(0, history.length - 1)])
    }
  }


  return { mode: history[history.length-1] , transition, back };
};


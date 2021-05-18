import React, { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  // function transition(mode, replace = false) {
  //   if (replace) {
  //     setHistory(prev => [...prev.slice(0, history.length - 1)])
  //     setHistory(...history, mode)
  //     setMode(mode);
  //   } else {
  //   setMode(mode);
  //   setHistory([...history, mode])
  //   }
  // }
  
  // function back() {
  //   if (history.length > 1) {
  //     setHistory(prev => [...prev.slice(0, history.length - 1)])
  //   }
  // }


  // return { mode: history[history.length-1] , transition, back };


  /////////////////////


    const transition = (newMode, replace = false) => {

      if (replace) {
  
        const newHistory = [...history.slice(0, history.length - 1), newMode];
        setMode(newMode);
        setHistory(newHistory);
  
      } else {
        const newHistory = [...history, newMode];
  
        setMode(newMode);
        setHistory(newHistory);
      }
  
    };
  
    const back = () => {
  
      if (history.length > 1) { 
  
        const newHistory = [...history.slice(0, history.length - 1)];
  
        const prevMode = newHistory[newHistory.length - 1];
  
        setMode(prevMode);
        setHistory(newHistory);
      }
    };
  
    return { mode, transition, back };
};


import { useState, useEffect } from "react";

/**
 * Custom hook for scrambled text animation effect
 * Animates from random characters to the final text
 * @param finalText - The text to display after animation
 * @param duration - Animation duration in milliseconds (default: 1800)
 * @param trigger - Boolean to trigger the animation (default: true)
 */
export const useScrambleText = (
  finalText: string, 
  duration: number = 1200,
  trigger: boolean = true
) => {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  
  useEffect(() => {
    if (!trigger) {
      setDisplayText(finalText);
      return;
    }

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&@?";
    const finalChars = finalText.split("");
    const steps = 50;
    let currentStep = 0;
    
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      const newText = finalChars.map((char, index) => {
        if (char === " ") return " ";
        
        const charProgress = (progress - (index / finalChars.length) * 0.3) / 0.7;
        
        if (charProgress >= 1) {
          return char;
        } else if (charProgress > 0) {
          return Math.random() > charProgress 
            ? chars[Math.floor(Math.random() * chars.length)]
            : char;
        } else {
          return chars[Math.floor(Math.random() * chars.length)];
        }
      }).join("");
      
      setDisplayText(newText);
      
      if (currentStep >= steps) {
        clearInterval(interval);
        setDisplayText(finalText);
        setIsComplete(true);
      }
    }, duration / steps);
    
    return () => clearInterval(interval);
  }, [finalText, duration, trigger]);
  
  return { displayText, isComplete };
};

import { useEffect, useRef } from "react";

export default function useOutsideClick( windowName, requestWindowName, closeHandler, listenCapturing=true) {
  const domRef = useRef();

  useEffect(() => {
    if (requestWindowName !== windowName) return;

    function handleClick(e) {
      if (domRef.current && !domRef.current.contains(e.target)) {
        closeHandler();
      }
    }

    function handleKeyDown(e) {
      if (e.key === "Escape") {
        closeHandler();
      }
    }

    document.addEventListener("click", handleClick, listenCapturing);
    document.addEventListener("keydown", handleKeyDown, listenCapturing);

    return () => {
      document.removeEventListener("click", handleClick, listenCapturing);
      document.removeEventListener("keydown", handleKeyDown, listenCapturing);
    };
  }, [closeHandler, requestWindowName, windowName, listenCapturing]);
  return domRef;
}

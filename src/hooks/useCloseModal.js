import { useEffect, useRef } from "react";

export default function useCloseModal(
  windowName,
  requestedWindow,
  closeHandler,
  capture = true
) {
  const domRef = useRef();
  useEffect(() => {
    if (windowName !== requestedWindow) return;
    domRef.current.focus();
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        closeHandler();
      }
    }

    function handleClick(e) {
      //console.log('handleClick on ', e.target);
      if (domRef.current && !domRef.current.contains(e.target)) {
        closeHandler();
      }
    }

    document.addEventListener("click", handleClick, capture);
    document.addEventListener("keydown", handleKeyDown, capture);

    return () => {
      document.removeEventListener("click", handleClick, capture);
      document.removeEventListener("keydown", handleKeyDown, capture);
    };
  }, [closeHandler, windowName, requestedWindow, capture, domRef]);

  return domRef;
}

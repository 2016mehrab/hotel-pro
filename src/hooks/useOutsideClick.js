import { useEffect, useRef } from "react";

export default function useOutsideClick(modalWindowName, requestWindowName, closeHandler, listenCapturing = true) {
  const domRef = useRef();

  useEffect(() => {
    if (requestWindowName !== modalWindowName) return;

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
  }, [closeHandler, requestWindowName, modalWindowName, listenCapturing]);
  return domRef;
}

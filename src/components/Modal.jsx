import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open , className='', onClose }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    
    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}` } onClose={onClose}>{children}</dialog>,
    document.getElementById("modal")
  );
}

//lock in the value this ref has when this effect function here runs.
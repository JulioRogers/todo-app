import React from "react";
import { createPortal } from "react-dom";
import './Modals.css';

export function Modals({children}) {
  return createPortal(
    <div className="ModalBackground">
      {children}
    </div>,
    document.getElementById('modal')
  );
}
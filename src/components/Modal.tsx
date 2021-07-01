import React, { useEffect, useRef, FC } from 'react';
import { createPortal } from 'react-dom';

const Modal: FC<any> = ({ children }) => {
  const elRef: any = useRef(null);

  if (!elRef.current) {
    const div = document.createElement('div'); //eslint-disable-line
    elRef.current = div;
  }

  useEffect(() => {
    const modalRoot: any = document.getElementById('modal'); //eslint-disable-line
    modalRoot.appendChild(elRef.current);

    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;

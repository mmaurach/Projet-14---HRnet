import { useEffect } from "react";
import { IoClose } from "react-icons/io5";

import "./modal.scss";

function Modal({
  isOpen,
  onClose,
  children,

  title = "",
  footer = null,

  width = "420px",
  bgColor = "#ffffff",
  textColor = "#374151",
  titleColor = "#2e7d32",
  fontSize = "16px",
  borderRadius = "16px",

  closeOnOverlay = true,
  closeOnEscape = true,
  showCloseButton = true,
}) {
  useEffect(() => {
    if (!isOpen || !closeOnEscape) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeOnEscape, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = () => {
    if (closeOnOverlay) onClose();
  };

  const modalStyle = {
    maxWidth: width,
    backgroundColor: bgColor,
    color: textColor,
    fontSize,
    borderRadius,
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div
        className="modal-content"
        style={modalStyle}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={title || "Modal"}
      >
        {showCloseButton && (
          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            <IoClose />
          </button>
        )}

        {title && (
          <h2 className="modal-title" style={{ color: titleColor }}>
            {title}
          </h2>
        )}

        <div className="modal-body">{children}</div>

        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </div>
  );
}

export default Modal;

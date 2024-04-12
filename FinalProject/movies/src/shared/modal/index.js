import "./Modal.css";

function Modal({ children, open, handleClose }) {
  return (
    <div className={open ? "modal modalVisible" : "modal modalHidden"}>
      <div className="modal-content">
        <div className="modal-header">
          <span className="close" onClick={handleClose}>
            &times;
          </span>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}

export default Modal;

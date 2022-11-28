import React from "react";

const ConfirmationModal = ({ title, closeModal, modalData, confirmAction }) => {
  return (
    <div>
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>

          <div className="modal-action">
            <label
              onClick={() => confirmAction(modalData)}
              htmlFor="confirmation-modal"
              className="btn"
            >
              Confirm
            </label>
            <button onClick={closeModal} className="btn btn-outline">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;

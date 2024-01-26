import React from "react";

function DeleteConfirmationModal({ productName, onDelete, onCancel }) {
  return (
    <div className="delete-confirmation-modal">
      <p>Voulez-vous vraiment supprimer le produit "{productName}" ?</p>
      <div className="modal-buttons">
        <button onClick={onDelete}>Oui</button>
        <button onClick={onCancel}>Annuler</button>
      </div>
    </div>
  );
}

export default DeleteConfirmationModal;

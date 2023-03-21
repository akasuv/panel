"use client";
import React from "react";
const SaveButton = () => {
  const [showToast, setShowToast] = React.useState(false);
  return (
    <>
      <button className="btn btn-primary" onClick={() => setShowToast(true)}>
        Save
      </button>
      {showToast && (
        <div className="toast toast-top toast-end">
          <div className="alert alert-success">
            <div>
              <span>Config updated!</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SaveButton;

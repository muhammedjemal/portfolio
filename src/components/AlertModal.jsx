import PropTypes from "prop-types"; // Import PropTypes for validation

const AlertModal = ({ message, type, onClose }) => {
  const modalColors = {
    success: "bg-green-500",
    error: "bg-red-500",
  };

  return (
    message && (
      <>
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div
            className={`p-6 rounded-lg ${modalColors[type]} text-white w-96`}
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {type === "success" ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  )}
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-lg font-semibold">
                  {type === "success" ? "Success!" : "Error!"}
                </p>
                <p className="text-sm">{message}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="mt-4 bg-white text-gray-900 py-2 px-4 rounded-lg w-full font-semibold hover:bg-gray-200"
            >
              Close
            </button>
          </div>
        </div>
      </>
    )
  );
};

// PropTypes validation for AlertModal
AlertModal.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["success", "error"]).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AlertModal;

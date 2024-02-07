export default function DecisionButton({
  statusHandler,
  buttonId,
  activeButton,
  children,
}) {
  return (
    <div className="btn ">
      <button
        type="button"
        className={`btn btn-${
          activeButton === buttonId ? "success" : "primary"
        }`}
        onClick={() => statusHandler(buttonId)}
      >
        {children}
      </button>
    </div>
  );
}

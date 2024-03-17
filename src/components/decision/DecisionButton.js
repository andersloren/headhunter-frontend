/* 
  This component is unused legacy code and is not being called in the code.

  TODO - Either use this component or remove it.
*/

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

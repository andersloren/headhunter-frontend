export function Button({ statusHandler, buttonId, activeButton, children }) {
  return (
    <div className="btn ">
      {console.log("Button Num", activeButton)}
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

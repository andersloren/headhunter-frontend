import "./spanStyles.css";

export default function Input({
  type = "text",
  placeholder = "Enter input here",
  state,
  onSetState,
}) {
  return (
    <>
      <span
        className="textarea"
        role="textbox"
        contenteditable
        type={type}
        placeholder={placeholder}
        value={state}
        onChange={(e) => onSetState(e.target.value)}
      ></span>
    </>
  );
}

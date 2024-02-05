import "./inputStyle.css";

export default function Input({
  type = "text",
  placeholder = "Enter input here",
  state,
  onSetState,
  textColor,
}) {
  return (
    <>
      <input
        className={textColor}
        type={type}
        placeholder={placeholder}
        value={state}
        onChange={(e) => onSetState(e.target.value)}
      ></input>
    </>
  );
}

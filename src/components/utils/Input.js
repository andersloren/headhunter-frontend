export default function Input({
  type = "text",
  placeholder = "Enter input here",
  state,
  onSetState,
}) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={state}
        onChange={(e) => onSetState(e.target.value)}
      ></input>
    </>
  );
}

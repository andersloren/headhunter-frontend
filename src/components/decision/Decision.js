import useState from "react";
import DecisionButton from "./DecisionButton";
import Prompt from "./prompt/Prompt";

/* 
  This component is unused legacy code and is not being called in the code.

  TODO - Either use this component or remove it.
*/

export default function Decision({ theme, children }) {
  const [activeButton, setActiveButton] = useState(null);

  const numberOfButtons = 3;

  function statusHandler(clickedButton) {
    clickedButton === activeButton
      ? setActiveButton(null)
      : setActiveButton(clickedButton);
  }

  // Function to calculate the opposite text color based on the theme
  const getOppositeTextColor = () => {
    return theme === "light" ? "black" : "white";
  };

  return (
    <div>
      <span className={`text-${getOppositeTextColor()}`}>{children}</span>
      {Array.from({ length: numberOfButtons }, (_, i) => i + 1).map((num) => (
        <DecisionButton
          statusHandler={statusHandler}
          buttonId={num}
          activeButton={activeButton}
        >
          Option {num}
        </DecisionButton>
      ))}
      {activeButton != null && (
        <p>
          You've chosen option {activeButton}
          <Prompt activeButton={activeButton} />
        </p>
      )}
    </div>
  );
}

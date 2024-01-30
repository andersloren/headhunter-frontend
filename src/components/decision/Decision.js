import { useState } from "react";
import { Button } from "./Button";
import { Prompt } from "./prompt/Prompt";

export function Decision({ theme, children }) {
  const [activeButton, setActiveButton] = useState(null);

  const numberOfButtons = 3;

  function statusHandler(clickedButton) {
    console.log(activeButton);
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
        <Button
          statusHandler={statusHandler}
          buttonId={num}
          activeButton={activeButton}
        >
          Option {num}
        </Button>
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

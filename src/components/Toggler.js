import React, { useState, useEffect } from 'react';
import Switch from 'react-switch';

const Toggler = ({ currentTheme, onThemeChange }) => {
    // State to track the current theme in the Toggler component
    const [isDarkTheme, setIsDarkTheme] = useState(currentTheme === 'dark');

    // Effect to apply theme changes when isDarkTheme state changes
    useEffect(() => {
        // Inform the parent component about theme changes
        onThemeChange(isDarkTheme ? 'dark' : 'light');
        return () => {
            document.body.className = '';
        };
    }, [isDarkTheme, onThemeChange]);

    // Function to handle the switch toggle
    const handleSwitchToggle = () => {
        setIsDarkTheme((prevTheme) => !prevTheme);
    };

    // Dynamic color for the lever based on the theme
    const leverColor = isDarkTheme ? '#666E6F' : '#C6C8C9';

    return (
        <div className={`bg-${isDarkTheme ? 'light' : 'dark'}`}>
            <div className={`position-fixed top-0 end-0 p-2 text-${isDarkTheme ? 'light' : 'dark'}`}>
                <span className="me-2">Light/Dark</span>
                <Switch
                    onChange={handleSwitchToggle}
                    checked={isDarkTheme}
                    onColor="#f0f0f0" // color when switch is on (dark theme)
                    offColor="#3c3c3c" // color when switch is off (light theme)
                    checkedIcon={false} // hide the checked icon
                    uncheckedIcon={false} // hide the unchecked icon
                    height={12} // set the height of the switch
                    width={24} // set the width of the switch
                    handleDiameter={12} // set the diameter of the handle
                    offHandleColor={leverColor} // color of the lever when switch is off
                    onHandleColor={leverColor} // color of the lever when switch is on
                />
            </div>
        </div>
    );
};

export default Toggler;

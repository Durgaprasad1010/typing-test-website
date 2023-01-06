import React from 'react';
import Select from 'react-select';
import { themeOptions } from '../Styles/theme';
import { useTheme } from '../Context/ThemeContext';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {

    const { setTheme, theme, defaultTheme } = useTheme();

    const handleThemeChange = (e) => {

        setTheme(e.value);
        localStorage.setItem('theme', JSON.stringify(e.value));
    }

    return (
        <div className='footer'>
            <div className="instructions">
                <div className="hint">
                    press <kbd>Tab</kbd> to open commands
                </div>
            </div>

            <div className="actual-footer">

                <div className="footer-links">
                    <a className='link' href='https://github.com/Durgaprasad1010/Typing-test' target='_blank' style={{ textDecoration: 'none', color: theme.title }} rel="noreferrer">
                        <GitHubIcon style={{
                            display: "block",
                            transform: "scale(1.5)",
                            cursor: "pointer",
                        }} />
                    </a>
                </div>
                <div className="theme-options">
                    <Select
                        options={themeOptions}
                        menuPlacement='top'
                        onChange={handleThemeChange}
                        defaultValue={{ value: defaultTheme, label: defaultTheme.label }}
                        styles={{
                            control: (styles) => ({ ...styles, backgroundColor: theme.background }),
                            menu: (styles) => ({ ...styles, backgroundColor: theme.background }),
                            singleValue: (provided, state) => ({
                                ...provided,
                                color: state.data.color,
                                fontSize: state.selectProps.myFontSize
                            })
                        }}
                    />
                </div>

            </div>


        </div>
    )
}

export default Footer
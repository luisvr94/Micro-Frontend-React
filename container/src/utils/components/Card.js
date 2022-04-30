import React from "react";
import { ThemeProvider } from "styled-components";

const themes = {
    movies: {
        colors: {
            bg: "#ceceff",
            color: "#335",
            shadow: "rgba(5, 5, 100, 0.5)"
        }
    },
    series: {
        colors: {
            bg: "#ccffcc",
            color: "#010",
            shadow: "rgba(50, 100, 50, 0.5)"
        }
    }
};

function Theme(props) {
    return (
        <ThemeProvider theme={themes[props.theme]}>
            {props.children}
        </ThemeProvider>
    );
}

Theme.defaultProps = {
    theme: "movies"
};

export { Theme };

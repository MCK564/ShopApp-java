import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";


//color design tokens
export const tokens =(mode) =>({
    ...(mode === 'dark'
    ? {
        blackCustom: {
            100: "#d6d8dc",
            200: "#adb1b9",
            300: "#858b97",
            400: "#1f2531",
            500: "#5c6474",
            600: "#293141",
            700: "#141820",
            800: "#0a0c10",
            900: "#333d51"
        },
        gray: {
            100: "#e0e0e0",
            200: "#c2c2c2",
            300: "#a3a3a3",
            400: "#858585",
            500: "#666666",
            600: "#525252",
            700: "#3d3d3d",
            800: "#292929",
            900: "#141414"
        },
        primary: {
            100: "#d2d4d9",
            200: "#a5aab3",
            300: "#797f8c",
            400: "#4c5566",
            500: "#1f2a40",
            600: "#192233",
            700: "#131926",
            800: "#0c111a",
            900: "#06080d"
        },
        greenAccent: {
            100: "#dbf5ee",
            200: "#b7ebde",
            300: "#94e2cd",
            400: "#70d8bd",
            500: "#4cceac",
            600: "#3da58a",
            700: "#2e7c67",
            800: "#1e5245",
            900: "#0f2922"
        },
        redAccent: {
            100: "#f8dcdb",
            200: "#f1b9b7",
            300: "#e99592",
            400: "#e2726e",
            500: "#db4f4a",
            600: "#af3f3b",
            700: "#832f2c",
            800: "#58201e",
            900: "#2c100f"
        },
        blueAccent: {
            100: "#e1e2fe",
            200: "#c3c6fd",
            300: "#a4a9fc",
            400: "#868dfb",
            500: "#6870fa",
            600: "#535ac8",
            700: "#3e4396",
            800: "#2a2d64",
            900: "#151632"
        },
        yellow: {
            100: "#f9f5d0",
            200: "#f3eca1",
            300: "#ece271",
            400: "#e6d942",
            500: "#e0cf13",
            600: "#b3a60f",
            700: "#867c0b",
            800: "#5a5308",
            900: "#2d2904"
        }
    }:{
        blackCustom: {
            100: "#0a0c10",
            200: "#141820",
            300: "#1f2531",
            400: "#293141",
            500: "#333d51",
            600: "#5c6474",
            700: "#858b97",
            800: "#adb1b9",
            900: "#d6d8dc",
        },
        gray: {
            100: "#141414",
            200: "#292929",
            300: "#3d3d3d",
            400: "#525252",
            500: "#666666",
            600: "#858585",
            700: "#a3a3a3",
            800: "#c2c2c2",
            900: "#e0e0e0",
        },
        primary: {
            100: "#06080d",
            200: "#0c111a",
            300: "#131926",
            400: "#192233",
            500: "#1f2a40",
            600: "#4c5566",
            700: "#797f8c",
            800: "#a5aab3",
            900: "#d2d4d9",
        },
        greenAccent: {
            100: "#0f2922",
            200: "#1e5245",
            300: "#2e7c67",
            400: "#3da58a",
            500: "#4cceac",
            600: "#70d8bd",
            700: "#94e2cd",
            800: "#b7ebde",
            900: "#dbf5ee",
        },
        redAccent: {
            100: "#2c100f",
            200: "#58201e",
            300: "#832f2c",
            400: "#af3f3b",
            500: "#db4f4a",
            600: "#e2726e",
            700: "#e99592",
            800: "#f1b9b7",
            900: "#f8dcdb",
        },
        blueAccent: {
            100: "#151632",
            200: "#2a2d64",
            300: "#3e4396",
            400: "#535ac8",
            500: "#6870fa",
            600: "#868dfb",
            700: "#a4a9fc",
            800: "#c3c6fd",
            900: "#e1e2fe",
        },yellow: {
            100: "#2d2904",
            200: "#5a5308",
            300: "#867c0b",
            400: "#b3a60f",
            500: "#e0cf13",
            600: "#e6d942",
            700: "#ece271",
            800: "#f3eca1",
            900: "#f9f5d0",
        },
    })
})

//mui them settings

export const themeSettings = (mode) => {
    const colors = tokens(mode);

    const palette = mode === 'dark'
        ? {
            primary: {
                main: colors.primary[500],
            },
            secondary: {
                main: colors.greenAccent[500],
            },
            neutral: {
                dark: colors.gray[700],
                main: colors.gray[500],
                light: colors.gray[100],
            },
            background: {
                default: colors.primary[500],
            },
        } : {
            primary: {
                main: colors.primary[500],
            },
            secondary: {
                main: colors.greenAccent[500],
            },
            neutral: {
                dark: colors.gray[700],
                main: colors.gray[500],
                light: colors.gray[100],
            },
            background: {
                default: "#fcfcfc",
            },
        };

    return {
        palette: {
            mode: mode,
            ...palette,
        },
        typography: {
            fontFamily: ["Source Sans pro", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Source Sans pro", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Source Sans pro", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Source Sans pro", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Source Sans pro", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Source Sans pro", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Source Sans pro", "sans-serif"].join(","),
                fontSize: 14,
            },
        },
    };
};


//context for color mode
export const ColorModeContext = createContext({
    toggleColorMode: ()=>   {}
});

export const useMode =() =>{
    const [mode, setMode] = useState("dark");


    const colorMode = useMemo(
        () =>({
            toggleColorMode : () =>
            setMode((prev) => (prev === "light" ? "dark" :"light" )),
        }),
        []

        
    );

    const theme = useMemo (()=> createTheme(themeSettings(mode)), [mode]);

    return [theme, colorMode];
}
"use client"
import { createTheme, MantineProvider as Provider } from '@mantine/core';
import {ReactNode} from "react";

const theme = createTheme({
    /** Put your mantine theme override here */
});

interface MantineProps {
    children: ReactNode;
}

function MantineProvider({children}:MantineProps) {
    return (
        <Provider theme={theme}>
            {children}
        </Provider>
    );
}

export default MantineProvider;
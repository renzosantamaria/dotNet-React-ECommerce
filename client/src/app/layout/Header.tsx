import { AppBar, Switch, Toolbar, Typography } from "@mui/material";
import React from "react";

interface IProps {
    isDarkMode: boolean;
    toggleThemeMode: () => void
}

const Header: React.FC<IProps> = ({isDarkMode, toggleThemeMode}) => {
    // const [isDarkMode, setIsDarkMode] = useState(false)


    return(
        <AppBar position="static" sx={{mb: 4}}>
            <Toolbar>
                <Typography variant="h6">RE-STORE</Typography>
                <Switch checked={isDarkMode} onChange={toggleThemeMode} />
            </Toolbar>
        </AppBar>
    )
}

export default Header
import { useState } from 'react'

//Components
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'

//Icons
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'
import DarkModeIcon from '@mui/icons-material/DarkMode'

/*Tipado de la callback prop que recibe el Switch para saber si sucede el click al boton del theme*/
type AppThemeSwitchProps = {
    onChange?: (nextIsDark: boolean) => void
}

export const AppThemeSwitch = ({ onChange }: AppThemeSwitchProps) => {
    const [isDark, setIsDark] = useState(false) //Arranca en Light Mode

    const handleSwitch = () => {               //Post-click cambia al sig estado, lo setea y avisa al padre
        const next = !isDark
        setIsDark(next)
        onChange?.(next)
    }

    return (
        <IconButton
            onClick={handleSwitch}
            sx={{ width: 40, height: 40 }}
        >
            {/* Light Mode */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    display: 'grid',
                    placeItems: 'center',
                    opacity: isDark ? 0 : 1,
                    transform: isDark ? 'scale(0.7) rotate(-20deg)' : 'scale(1)',
                    transition: 'opacity 200ms ease, transform 200ms ease',
                    pointerEvents: 'none',
                }}
            >
                <WbSunnyOutlinedIcon />
            </Box>

            {/* Dark Mode */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    display: 'grid',
                    placeItems: 'center',
                    opacity: isDark ? 1 : 0,
                    transform: isDark ? 'scale(1)' : 'scale(0.7) rotate(20deg)',
                    transition: 'opacity 200ms ease, transform 200ms ease',
                    pointerEvents: 'none',
                }}
            >
                <DarkModeIcon />
            </Box>
        </IconButton>
    )
}
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import '@fontsource/nunito/400.css'
import '@fontsource/nunito/600.css'
import '@fontsource/nunito/700.css'
import { HomeCarousel } from '@/Components/Carousel'

export const Home = () => {
    return (
        <Box sx= {{mt: '1rem'}}>
            <Typography sx={{ fontFamily: '"Nunito", system-ui, sans-serif', fontStyle: 'italic', textAlign: 'center' }}>
                Plantas nativas de Buenos Aires para tu hogar
            </Typography>

            <HomeCarousel />
        </Box>
    )
}


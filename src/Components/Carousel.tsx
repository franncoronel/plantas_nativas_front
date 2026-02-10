import { useState } from 'react'

//Components
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'

//Icons
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'

//Images
import Banner2 from '../assets/banner_2.png'
import Banner1 from '../assets/banner_1.png'
import Banner3 from '../assets/banner_3.png'

const slides = [
    { label: 'Banner 1', src: Banner1 },
    { label: 'Banner 2', src: Banner2 },
    { label: 'Banner 3', src: Banner3 }
]

export const HomeCarousel = () => {
    const [active, setActive] = useState(0)

    const totalSlides = slides.length

    //Vuelve a la anterior imagen
    const handlePrevious = () => {
        setActive((prev) => (prev - 1 + totalSlides) % totalSlides)
    }

    //Va a la imagen siguiente
    const handleNext = () => {
        setActive((previous) => (previous + 1) % totalSlides)
    }

    return (
        <Box sx={{ width: '100%', position: 'relative' }}>
            <Box
                component='img'
                src={slides[active].src}
                alt={slides[active].label}
                sx={{ width: '100%', height: 'auto' }}
            />

            <IconButton
                onClick={handlePrevious}
                disableRipple
                sx={{position: 'absolute', top: '40%', left: 0, bgcolor: 'white', opacity: 0.5, p: '0px'}}
            >
                <KeyboardArrowLeftIcon fontSize="small"/>
            </IconButton>

            <IconButton
                onClick={handleNext}
                disableRipple
                sx={{position: 'absolute', top: '40%', right: 0, bgcolor: 'white', opacity: 0.5, p: '0px'}}
            >
                <KeyboardArrowRightIcon fontSize="small"/>
            </IconButton>


        </Box>
    )
}
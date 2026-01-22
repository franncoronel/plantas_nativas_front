import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import jazminImage from '../assets/jazmin_4.jpg'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

interface ProductCardProps {
    image?: string
    title?: string
    price?: number
}

const ProductCard = ({image, title, price}: ProductCardProps) => {
    return (
        <Card>
            <CardMedia
                component='img'
                image={image || jazminImage}
                title={title || 'Jazmín de la selva'}
            />
            <CardContent>
                <Typography variant='h6' align='left'>
                    {title || 'Jazmín de la selva'}
                </Typography>
                <Typography variant='subtitle1' align='left'>
                    ${price || 30}
                </Typography>
            </CardContent>
            <CardActions sx={{justifyContent: 'center'}}>
                <Button variant='outlined' color='success'>Comprar!!!</Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard
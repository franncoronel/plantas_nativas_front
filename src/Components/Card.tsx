import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import jazminImage from '../assets/jazmin_4.jpg'

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
                {title || 'Jazmín de la selva'}
            </CardContent>
        </Card>
    )
}

export default ProductCard
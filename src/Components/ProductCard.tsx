import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import jazminImage from "../assets/jazmin_4.jpg"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined'
import Box from "@mui/material/Box"

interface ProductCardProps {
    image?: string
    title?: string
    price?: number
}

const ProductCard = ({ image, title, price }: ProductCardProps) => {
    return (
        <Card sx={{ backgroundColor: "#F7EFDC" }}>
            <CardMedia
                component="img"
                image={image || jazminImage}
                title={title || "Jazmín de la selva"}
                sx={{ height: 120, objectFit: "cover" }}
            />
            <CardContent>
                <Typography variant="subtitle2" align="left">
                    {title || "Jazmín de la selva"}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mt: 1 }}>
                <Typography variant="h6" align="left">
                    ${price || 3000}
                </Typography>
                <Button variant="outlined" size="small" disableElevation sx={{ minWidth: 0, px: 1, backgroundColor: "#F7EFDC", borderColor: "black", borderRadius: "20px"}}>
                    <AddShoppingCartOutlinedIcon fontSize="small" />
                </Button>
                </Box>
            </CardContent>
        </Card>
    )
}

export default ProductCard

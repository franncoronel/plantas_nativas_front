import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import ProductCard from "@/Components/ProductCard"
import Grid from "@mui/material/Grid"

export const Gallery = () => {
    return(
        <Container>
            <Grid container spacing={2}>
                <Grid container size={12} justifyContent="space-between">
                    <Button color="warning" variant="outlined">Filtrar</Button>
                    <Button color="warning" variant="outlined">Ordenar</Button>
                </Grid>
                <Grid size={6}>
                    <ProductCard />
                </Grid>
                <Grid size={6}>
                    <ProductCard />
                </Grid>
                <Grid size={6}>
                    <ProductCard />
                </Grid>
                <Grid size={6}>
                    <ProductCard />
                </Grid>
            </Grid>
        </Container>
    )   
}   
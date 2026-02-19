import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import ProductCard from "@/Components/ProductCard"
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined'
import SortOutlinedIcon from '@mui/icons-material/SortOutlined'
import Grid from "@mui/material/Grid"

export const Gallery = () => {
    return(
        <Container>
            <Grid container spacing={2}>
                <Grid container size={12} justifyContent="space-between">
                    <Button variant="text" startIcon={<FilterAltOutlinedIcon />}>Filtrar</Button>
                    <Button variant="text" startIcon={<SortOutlinedIcon />}>Ordenar</Button>
                </Grid>
                <Grid container size={12} spacing={2} >
                    <Grid size={6}><ProductCard /></Grid>
                    <Grid size={6}><ProductCard /></Grid>
                    <Grid size={6}><ProductCard /></Grid>
                    <Grid size={6}><ProductCard /></Grid>
                </Grid>
            </Grid>
        </Container>
    )   
}   
import * as React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import SearchBar from "material-ui-search-bar";
import firebase from '../../firebase-congif';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


const Mainrecipepage = () =>{
    const ref = firebase.firestore().collection("Recipe")
    // console.log(ref)

    const [recipedata, setRecipedata]= React.useState([])
    const [loader, setloader]= React.useState(true)

    function getData(){
        ref.onSnapshot((querySnapshot)=>{
            const items =[]
            querySnapshot.forEach((doc)=>{
                items.push(doc.data())
            })
            setRecipedata(items)
            setloader(false)
        })
    }
    React.useEffect(()=>{
        getData()
    },[])

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
    
    return(
        <>
        <div ><SearchBar/></div>
        <Stack direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={1}>
            <h1>Recipe page!!!</h1>
                
                <Link href="./AddRecipe" underline="none">
                    <Button variant="contained" startIcon={<AddIcon />}>ADD RECIPE</Button>
                </Link>

        </Stack>
                <p>
                    This is the table that shows all the recipes...
                </p>
                {loader===false && (recipedata.map((dev) =>(
                    <div key={dev.id}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="a dense table">
                                <TableHead>
                                <TableRow>
                                    <StyledTableCell>TITLE</StyledTableCell>
                                    <StyledTableCell align="center">INGREDIENTS</StyledTableCell>

                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {recipedata.map((row) => (
                                <TableRow
                                    //key={dev.id}
                                    //sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    {/* <TableCell component="th" scope="row">{row.name}</TableCell> */}

                                    <TableCell>{row.Title}</TableCell>
                                    <TableCell align="right">{row.Ingredients}</TableCell>

                                </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                )))}
            </>
    );
}
export default Mainrecipepage;
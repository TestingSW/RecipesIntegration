import { Button, Card, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import * as React from 'react';
import { recipe } from '../typeDefs';

interface listProps {
editRecipe: any,
viewRecipe: any,
deleteRecipe: any,
recipes: recipe[]
}

interface listState {

}

class RecipeList extends React.Component<listProps, listState> {



view(e:any, id:string) {
    this.props.viewRecipe(e, id)
}

edit(e:any, id:string) {
    this.props.editRecipe(e, id)
}



render() {
    return <TableContainer component={Card}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell align='left'>
                        Receta
                    </TableCell>
                    <TableCell colSpan={2} align='center'>
                        Acciones
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {this.props.recipes.map((recipe) => <TableRow key={recipe._id} style={{cursor: 'pointer'}} onClick={(e:any) => this.view(e, recipe._id!)}>
                    <TableCell component="th">
                        {recipe.title}
                    </TableCell>
                    <TableCell >
                        <Button fullWidth onClick={(e:any) => this.edit(e, recipe._id!)}>Editar</Button>
                    </TableCell>
                    <TableCell>
                        <Button fullWidth color="error" onClick={(e) => this.props.deleteRecipe(e, recipe._id!)} >Eliminar</Button>
                    </TableCell>
                </TableRow>
            )}

            </TableBody>
        </Table>
    </TableContainer>
}
}

export default RecipeList;
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

view(e:any, id:number) {
    this.props.viewRecipe(e, id)
}

edit(e:any, id:number) {
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
            <TableRow style={{cursor: 'pointer'}} onClick={this.props.viewRecipe}>
                    <TableCell component="th">
                        Nombre
                    </TableCell>
                    <TableCell >
                        <Button fullWidth onClick={this.props.editRecipe}>Editar</Button>
                    </TableCell>
                    <TableCell>
                        <Button fullWidth color="error" onClick={this.props.deleteRecipe} >Eliminar</Button>
                    </TableCell>
                </TableRow>
                {this.props.recipes.map((recipe) => <TableRow key={recipe.id} style={{cursor: 'pointer'}} onClick={(e:any) => this.view(e, recipe.id!)}>
                    <TableCell component="th">
                        {recipe.name}
                    </TableCell>
                    <TableCell >
                        <Button fullWidth onClick={(e:any) => this.edit(e, recipe.id!)}>Editar</Button>
                    </TableCell>
                    <TableCell>
                        <Button fullWidth color="error" onClick={(e) => this.props.deleteRecipe(e, recipe.id!)} >Eliminar</Button>
                    </TableCell>
                </TableRow>
            )}

            </TableBody>
        </Table>
    </TableContainer>
}
}

export default RecipeList;
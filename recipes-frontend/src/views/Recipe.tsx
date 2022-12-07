import * as React from 'react';
import Container from '@mui/material/Container';
import RecipeList from '../components/RecipeList';
import RecipeDetail from '../components/RecipeDetail';
import { Stack } from '@mui/system';
import { Button } from '@mui/material';
import {recipe} from "../typeDefs"

type recipeProps = {

}

interface recipeState {
    recipes: recipe[],
    target: number | null,
    state: "list" | "view" | "edit" | "create" | "delete" 

}



class Recipe extends React.Component<recipeProps, recipeState> {
    constructor(props:recipeProps) {
        super(props);
        // No llames this.setState() aquí!
        this.state = { recipes: [], target: null, state: "list"};
      }
    editRecipe(e: any, id:number) {
      e.stopPropagation()
      this.setState({state:"edit", target: id})
    }
    viewRecipe(e: any, id:number) {
      e.stopPropagation()
      this.setState({state: "view", target: id})
    }
    deleteRecipe(e: any, id:number) {
      e.stopPropagation()
      let recipes = this.state.recipes

      let newRecipes = recipes.filter(recipe => recipe.id != id)
      this.setState({recipes: newRecipes})
      
    }
    showList(e: any,  isNew: boolean, wasCancelled: boolean, recipe?: recipe) {
      e.stopPropagation()
      this.setState({state: "list"})
      if (!wasCancelled) {
        let recipes = this.state.recipes
        // se ve si se agrega o edita wea
        if (isNew && recipe != undefined) {
          recipe.id = this.state.recipes.length + 1
          recipes.push(recipe)
          this.setState({recipes: recipes})
          // se agrega nueva receta

        } else {
          console.log("editando archivo")
          console.log(this.state.target!)
          // se edita receta anterior
          recipe!.id = this.state.target! 
          recipes[this.state.target! - 1 ] = recipe!
          this.setState({recipes: recipes})
        }
      }
      
    }
    createRecipe(e: any) {
      this.setState({state: "create"})
    }

    editR = this.editRecipe.bind(this)
    viewR = this.viewRecipe.bind(this)
    deleteR = this.deleteRecipe.bind(this)
    showL= this.showList.bind(this)
    createR = this.createRecipe.bind(this)
    render() {
        console.log(this.state.recipes, this.state.target);
      return <Container style={{padding: "2rem"}}>
        
      <Stack spacing={2}>
        <Button onClick={this.createR} >Crear nueva receta</Button>
        <RecipeList recipes={this.state.recipes} deleteRecipe={this.deleteR} editRecipe={this.editR} viewRecipe={this.viewR}/>
        {(() => {if (this.state.state !== "delete") return <RecipeDetail recipeData={this.state.recipes[this.state.target! - 1]} mode={this.state.state} handleClose={this.showL}/>}) ()}
      </Stack>
        
        
      </Container>;
    }
  }

  export default Recipe
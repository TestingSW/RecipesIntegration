import * as React from 'react';
import Container from '@mui/material/Container';
import RecipeList from '../components/RecipeList';
import RecipeDetail from '../components/RecipeDetail';
import { Stack } from '@mui/system';
import { Button } from '@mui/material';
import {recipe} from "../typeDefs"
import Api from '../model/api';

type recipeProps = {

}

interface recipeState {
    recipes: recipe[],
    target?: recipe,
    state: "list" | "view" | "edit" | "create" | "delete" 

}



class Recipe extends React.Component<recipeProps, recipeState> {
    constructor(props:recipeProps) {
        super(props);
        // No llames this.setState() aquí!
        this.state = { recipes: [], target: undefined, state: "list"};
      }
    editRecipe(e: any, id:string) {
      e.stopPropagation()
      let recipe = this.state.recipes.find(recipe => recipe._id! == id)
      this.setState({state:"edit", target: recipe})
    }
    viewRecipe(e: any, id:string) {
      e.stopPropagation()
      let recipe = this.state.recipes.find(recipe => recipe._id! == id)
      this.setState({state: "view", target: recipe})
    }
    async deleteRecipe(e: any, id:string) {
      e.stopPropagation()
      console.log(id)
      await Api.deleteRecipe(id);
      this.updateList();      
    }

    updateList = async () => {
      let recipes = await Api.getRecipes();
      console.log(recipes)
      this.setState({recipes: recipes})

  }

    async showList(e: any,  isNew: boolean, wasCancelled: boolean, recipe?: recipe) {
      e.stopPropagation()
      this.setState({state: "list"})
      if (!wasCancelled) {
      if (isNew) {
        await Api.postRecipe(recipe!)
      } else {
        console.log("probando")
        console.log(recipe)
        await Api.updateRecipe(recipe!);
      }
      this.updateList();
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
        <Button onClick={this.updateList} >Actualizar</Button>

        <RecipeList recipes={this.state.recipes} deleteRecipe={this.deleteR} editRecipe={this.editR} viewRecipe={this.viewR}/>
        {(() => {if (this.state.state !== "delete") return <RecipeDetail recipeData={this.state.target!} mode={this.state.state} handleClose={this.showL}/>}) ()}
      </Stack>
        
        
      </Container>;
    }
  }

  export default Recipe
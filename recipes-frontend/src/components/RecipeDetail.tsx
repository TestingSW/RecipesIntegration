import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import * as React from 'react';
import { recipe } from '../typeDefs';
import Recipe from '../views/Recipe';


interface detailProps {
  mode: "view" | "edit" | "create" | "list",
  handleClose: any
  recipeData: recipe
}

interface detailState {
 name: string,
 ingredients: string,
 instructions: string,
 id?: number
}
export default class RecipeDetail extends React.Component<detailProps, detailState> {
   title = {
    "view": "Ver Receta",
    "edit": "Editar Receta",
    "create": "Crear Receta",
    "list": ""
  }

  description = {
    "view": "Mira tu hermosa receta",
    "edit": "Edita tu hermosa receta para que sea más hermosa",
    "create": "Crea tu hermosa receta para que el mundo lo sepa",
    "list": ""
  }

  constructor(props:detailProps) {
    super(props)
    console.log(props.recipeData)
    this.state= {ingredients: "", instructions: "", name: ""}
    if (props.recipeData != undefined) {
      this.state = {...props.recipeData}
    }
 }

 componentDidUpdate(prevProps:detailProps) {
console.log(this.props.recipeData, prevProps.recipeData)
    if (this.props.recipeData != undefined) {
      if (prevProps.recipeData != undefined) {
        if ( this.props.recipeData.id != prevProps.recipeData.id)
        this.updateAndNotify()
      } else
      this.updateAndNotify()
    }
  }
  
updateAndNotify(){
  console.log(this.props.recipeData)
  this.setState({...this.props.recipeData})
}

 handleChange(e:any) {
  if (e.target.id === "ingredients") {
    this.setState({ingredients: e.target.value})
  } else if (e.target.id === "instructions") {
    this.setState({instructions: e.target.value})
  } else if (e.target.id === "name") {
    this.setState({name: e.target.value})
  }
}

hc = this.handleChange.bind(this)
  doAction(e:any) {
    let recipe:recipe = {
      name: this.state.name,
      ingredients: this.state.ingredients,
      instructions: this.state.instructions
    }
    
    if (this.props.mode === "create") {
      this.props.handleClose(e, true, false, recipe)
    } else if (this.props.mode === "edit") {
      this.props.handleClose(e, false, false, recipe)
    }
    }
    doClose(e:any) {
      this.props.handleClose(e,false, true)
    }
  doA = this.doAction.bind(this)

  doC = this.doClose.bind(this)
    render() {
      const disabled = this.props.mode === "view" ? true : false
        return <Dialog onClose={this.doC} open={ (() => {if (this.props.mode != "list") return true; else return false}) () }>
        <DialogTitle>{this.title[this.props.mode]}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {this.description[this.props.mode]}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nombre Receta"
            type=""
            disabled={disabled}
            fullWidth
            value={this.state.name}
            onChange={this.hc}
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="ingredients"
            label="Ingredientes"
            multiline
            disabled={disabled}
            type=""
            fullWidth

            onChange={this.hc}

            value={this.state.ingredients}
            rows={2}
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="instructions"
            label="Pasos a seguir"
            multiline
            disabled={disabled}
            rows={4}
            onChange={this.hc}

            type=""
            value={this.state.instructions}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.doC}>Cancelar</Button>
          <Button onClick={this.doA}>Guardar Receta</Button>
        </DialogActions>
      </Dialog>
    }
}
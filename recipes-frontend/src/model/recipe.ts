import { recipe } from "../typeDefs";
import Ingredient from "./ingredient";


class Recipe {
    constructor(object:recipe) {
        this.name = object.title;
        this.steps = object.steps;
        this.ingredients = object.ingredients;
        this.img = object.photo!;

    }
    name:String;
    steps:[String?];
    ingredients:Ingredient[];
    img:String;

    
}

export default Recipe;
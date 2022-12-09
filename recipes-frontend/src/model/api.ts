import { response } from "express";
import { recipe } from "../typeDefs";
import Recipe from "./recipe";

class Api {
    constructor() {
        // void
    }
    static async getRecipes() {
        var recipes:[recipe] = await fetch("http://192.168.100.168:9000/api/recipe/").then((res) => {
            return res.json()
        }).then(data => data.body, data => [])
        console.log(recipes)
        return recipes
    }

    static async postRecipe(recipe:recipe) {
        var recipeData = {
            title: recipe.title,
            steps: recipe.steps,
            ingredients: recipe.ingredients,
            img: recipe.img
        };

        fetch('http://192.168.100.168:9000/api/recipe/', {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(recipeData),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log('Success:', data);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
    }

    static async updateRecipe(recipe:recipe) {
        var recipeData = {
            title: recipe.title,
            steps: recipe.steps,
            ingredients: recipe.ingredients,
            img: recipe.img
        };

        fetch('http://192.168.100.168:9000/api/recipe/' + recipe._id, {
            method: 'put', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(recipeData),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log('Success:', data);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
    }


    static async deleteRecipe(id:string) {

        fetch('http://192.168.100.168:9000/api/recipe/' + id, {
            method: 'DELETE', // or 'PUT'
          })
            .then((response) => response.json())
            .then((data) => {
              console.log('Success:', data);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
    }

}

export default Api;
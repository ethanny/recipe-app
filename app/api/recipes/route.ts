import { NextRequest, NextResponse } from "next/server";
 
import recipes from "../../data/recipes.json";

export type Recipe = {
    id: string;
    name: string;
    ingredients: string[];
    instructions: string[];
    cookingTime: string;
    servings: number;
    image: string;
}

type ApiResponse = {
    message: string;
    recipes?: Recipe[] | Recipe;
}

export async function GET(request: NextRequest){
    const url = request.nextUrl.searchParams
    const id = url.get('id')

    let res: ApiResponse = {message: 'Invalid request'}

    // Get a single recipe by id
    if (id){
        const recipe = recipes.find((recipe: Recipe) => recipe.id === id);
       
        // Recipe is found
        if (recipe) {
            res = {
                message: 'Successfully fetched recipe',
                recipes: recipe
            }
            return NextResponse.json(res);

        // Recipe is not found
        } else {
            return NextResponse.json(
                { message: 'Recipe not found' },
                { status: 404 }
            );
        }
    // Get all recipes
    }else {
        res = {
            message: 'Successfully fetched all recipes',
            recipes: recipes
        }
    }   


    return NextResponse.json(res);
}
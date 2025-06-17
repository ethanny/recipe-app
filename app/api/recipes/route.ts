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
    const action = url.get('a')
    const query = url.get('q')
    const id = url.get('id')

    let res: ApiResponse = {message: 'Invalid request'}

    if (action == 'get' && query == 'recipes'){
        res = {
            message: '',
            recipes: recipes
        }
    }else if (action == 'get' && query == 'recipe' && id){
        const recipe = recipes.find((recipe: Recipe) => recipe.id === id);
       
        if (recipe) {
            res = {
                message: '',
                recipes: recipe
            }
            return NextResponse.json(res);
        } else {
            return NextResponse.json(
                { message: 'Recipe not found' },
                { status: 404 }
            );
        }
    }

    return NextResponse.json(res);
}
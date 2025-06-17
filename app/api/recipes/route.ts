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
    recipes?: Recipe[];
}

export async function GET(request: NextRequest){
    const url = request.nextUrl.searchParams
    const action = url.get('a')
    const query = url.get('q')

    let res: ApiResponse = {message: 'Invalid request'}

    if (action == 'get' && query == 'recipes'){
        res = {
            message: '',
            recipes: recipes
        }
    }

    return NextResponse.json(res);
}
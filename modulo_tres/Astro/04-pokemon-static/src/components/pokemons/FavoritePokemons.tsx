import type { FavoritePokemon } from "@interfaces/favorite-pokemons";
import {For, createSignal } from "solid-js";
import { FavoritePokemonCard } from "./FavoritePokemonCard";



const getLocalStoragePokemons = (): FavoritePokemon [] => {
    const favoritePokemos = JSON.parse(
        localStorage.getItem('favorites') ?? '[]'
    )
    return favoritePokemos
}



export const FavoritePokemos = () => {
    const [pokemons, setPokemons] = createSignal(getLocalStoragePokemons());

return (
    <div class="grid grid-cols-2 sm:grid-cols-4">
        <For each={ pokemons() }>
            {
                (pokemon) => <FavoritePokemonCard pokemon={pokemon}/>
            }
        </For>
    </div>
);
};
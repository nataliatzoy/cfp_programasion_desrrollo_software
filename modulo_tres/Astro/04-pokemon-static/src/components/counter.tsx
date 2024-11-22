import type { JSX } from "astro/jsx-runtime"
import { createSignal, type Component } from "solid-js"

interface Props {
    initValue: number
    children?: JSX.Element;
}

export const Counter: Component<Props> = (Props) => {

    const [counter, setCounter] = createSignal(Props.initValue)
    
    return(
        <>
        {/* <h1 class="text-5xl">Counter</h1> */}
        {Props.children}
        <h3 class="text-xl">Value: {counter()}</h3>

        <button 
        onclick={()=> setCounter((prev)=> ++prev)}
         class="bg-blue-500 p-2 mr-2 rounded">+1
        </button>
         
        <button
        onclick={()=> setCounter((prev)=> --prev)}
        class="bg-blue-500 p-2 mr-2 rounded">-1
        </button>

        </>
    )
}
import pads from "./pads"
import React from "react"

export default function App() {
    const [stateValue,setState] = React.useState(pads)
    const buttons = stateValue.map((button)=>
        <button key={pad.id}>button</button>)
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from pads.js
     * 2. Map over that state array and display each one
     *    as a <button> (CSS is already written for you)
     *    (Don't worry about using the "on" or "color" 
     *    properties yet)
     */
    return (
        <main>
            <div className="pad-container">
                {/* <button>s go here */}
            </div>
        </main>
    )
}

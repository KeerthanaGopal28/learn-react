export default function Pad(props) {
/**
 * Challenge: Create state controlling whether
 * this pad is "on" or "off". Use the incoming
 * `props.on` to determine the initial state.
 * 
 * Create an event listener so when the pad is clicked,
 * it toggles from "on" to "off".
 * 
 * Goal: clicking each pad should toggle it on and off.
 */
    const [state,stateFunction] = React.useState(props.on)
    function clickable(){
        stateFuncion(prevState=>!prestate)

    return (
        <button 
            style={{backgroundColor: props.color}}
            className={on ? "on":undefined}
            onClick={clickable}
        ></button>
    )
}

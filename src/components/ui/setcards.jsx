import classes from "./cards.module.css"

export default function Cards(props) {
    return (
        <div className={classes.cards}>{props.children}</div>
    )

}
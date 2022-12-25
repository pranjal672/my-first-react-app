import { Link } from 'react-router-dom'
import classes from './navbar.module.css'

export default function CreateNav() {
    return (
        <nav className={classes.nav}>
            <h1>Learning React</h1>
            <ul className={classes.ul}>
                <li><Link to={"/"} className={classes.link}>Home</Link></li>
                <li><Link to={"/new-meetup"} className={classes.link}>New Meetup</Link></li>
                <li><Link to={"/favourite"} className={classes.link}>Favorites</Link></li>
            </ul>
        </nav>
    )
}
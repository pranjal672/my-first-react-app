import Cards from "./ui/setcards"
import { useContext } from "react"
import FavoriteContext from "../store/favorite-context"

export default function MeetupItem(props) {
    const favoriteCtx = useContext(FavoriteContext)
    const isItemFavorite = favoriteCtx.isFavorite(props.id)

    function toggleFavorite() {
        if (isItemFavorite) {
            favoriteCtx.removeFavorite(props.id)
        } else {
            favoriteCtx.addFavorite({
                id: props.id,
                name: props.name,
                age: props.age
            })
        }
    }
    return (
        <Cards>
            <li>
                <div>
                    <h3>{props.name}</h3>
                    <p>Age : {props.age}</p>
                </div>
                <div>
                    <button onClick={toggleFavorite}>{isItemFavorite ? "Remove from Favorite" : "Add to Favorite"}</button>
                </div>
            </li>
        </Cards>
    )
}
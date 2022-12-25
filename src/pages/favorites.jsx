import { useContext } from "react"
import MeetupList from "../components/meetuplist";
import FavoriteContext from "../store/favorite-context"


function FavoritesPage() {
    const favoriteCtx = useContext(FavoriteContext)
    let content;
    if (favoriteCtx.totalFavorites === 0) {
        content = <p>There is no Favorites yet. Go add some..</p>
    } else {
        content = <MeetupList data={favoriteCtx.favourites} />
    }
    return <>
        <h1>Favourite Meetups List</h1>
        <section>{content}</section>
    </>
}

export default FavoritesPage;
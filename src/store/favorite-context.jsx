import { createContext, useState } from "react";

const FavoriteContext = createContext({
    favourites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => { },
    removeFavorite: (meetupID) => { },
    isFavorite: (meetupID) => { }
});

export function FavoriteContextProvider(props) {
    const [userFavorite, setUserFavorite] = useState([])

    function addFavoriteHandler(favoriteMeetup) {
        setUserFavorite((prevUserFavorite) => {
            return prevUserFavorite.concat(favoriteMeetup)
        })
    }
    function removeFavoriteHandler(meetupID) {
        setUserFavorite((prevUserFavorite) => {
            return prevUserFavorite.filter(meetup => meetup.id !== meetupID)
        })
    }
    function isFavoriteHandler(meetupID) {
        return userFavorite.some(meetup => meetup.id === meetupID)
    }
    const context = {
        favourites: userFavorite,
        totalFavorites: userFavorite.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        isFavorite: isFavoriteHandler
    }

    return (
        <FavoriteContext.Provider value={context}>
            {props.children}
        </FavoriteContext.Provider>
    )
}

export default FavoriteContext;
import React from 'react'
import FavoritesContext from '../store/FavoritesContext'
import { useContext } from 'react'
import { MeetupList } from '../components/meetups/MeetupList'
export const FavoritesPage = () => {
    const favoritesCtx = useContext(FavoritesContext)
    let content;
    if(favoritesCtx.totalFavorites ===0){
        content=<p> No Favorites At The Moment</p>
    }
    else{
        content=<MeetupList meetups={favoritesCtx.favorites} />

    }
    return (
        <div>
            <h1>My Favorites</h1>
            {content}
        </div>
    )
}

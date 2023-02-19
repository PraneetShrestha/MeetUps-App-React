import React from 'react'
import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/FavoritesContext';
import { useContext } from 'react';

export const MainNavigation = () => {
    const favoriteCtx = useContext(FavoritesContext)
    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li><Link to='/'>All Meetups</Link></li>
                    <li><Link to='/new-meetup'>New Meetup</Link></li>
                    <li><Link to='/favorites'>
                        Favorites
                        <span className={classes.badge}>{favoriteCtx.totalFavorites}</span>
                        </Link></li>
                </ul>
            </nav>
        </header>
    )
}

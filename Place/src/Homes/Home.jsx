import React from 'react';
import TrendingAndRecommended from "../Components/TrendingAndRecommended";
import Slideshow from './Slideshow';
import HeaderMenu from '../Layout/HeaderMenu';
import MarqueeBanner from '../Components/ScrollText';




export default function Home() {
    return (
        <div>
            <HeaderMenu />
            <MarqueeBanner />
            <Slideshow />


            <TrendingAndRecommended />
        </div>
    )
}

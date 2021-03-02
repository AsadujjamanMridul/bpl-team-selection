import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Player from '../Player/Player';
import data from '../../fakeData/fakeData.json'

const Body = () => {

    const [players, setPlayers] = useState([]);
    useEffect(()=>{
        setPlayers(data);
    }, [])

    const [cart, setCart] = useState([]);


    const handleHireBtn = (player) => {
        const newCart = [...cart,player];
        setCart(newCart);
    }

    return (
        <main className="container main-container my-5">
            <div className="row">
                <div className="player-info-container col-lg-8 row m-0">
                    {
                        players.map(player=> <Player player={player} handleHireBtn={handleHireBtn} key={player.name}></Player>)
                    }
                </div>
                <div className="cart-container col-lg-4">
                    <Cart cart={cart} key={cart.name}></Cart>
                </div>
            </div>
        </main>
    );
};

export default Body;
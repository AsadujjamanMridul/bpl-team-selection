import React from 'react';
import './Cart.css'

const Cart = (props) => {

    let total = 0;
    props.cart.map(player => {
        total = total + player.salary;
    })

    return (
        <section className='team-summary my-5'>
            <h3 className='team-summary-title'>Team Summary</h3>
            <hr />

            <p className='total-player'>Total Players: {props.cart.length}</p>

            <table className="table table-borderless mt-3 mb-5">
                <thead className="table-light fw-bold selected-player">
                    <tr>
                        <th scope="col" className='text-left'>Player Name</th>
                        <th scope="col" className="text-right">Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.cart.map(player =>
                            <tr>
                                <td className='text-left selected-player'>{player.name}</td>
                                <td className="text-right selected-player">$ {player.salary}M / Month</td>
                            </tr>)
                    }
                </tbody>
                <tfoot>
                    <tr className="total">
                        <td><b>Total Budget</b></td>
                        <td className="text-right"> <b>$ <span className='total-amount'>{total}M</span> / Month</b> </td>
                    </tr>
                </tfoot>
            </table>

        </section>
    );
};

export default Cart;
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ItemCart from "../../components/ItemCart"
import "./index.css"

import { removeItem } from '../../store/ducks/cart'

import Header from '../../components/Header'

const CartPage = () => {

    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch();

    function removeItemCart(id) {
        dispatch(removeItem(id));
    }

    return (
        <div>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    {cart.length === 0 ? (<p className="col-sm-12 mt-5 text-warning text-center">Sem revistas no carrinho</p>)
                        : (
                            <React.Fragment>
                                {cart.map((item) => <ItemCart key={item.id} item={item} removeItemCart={removeItemCart} />)}
                            </React.Fragment>
                        )}
                </div>
            </div>
        </div>

    )
}
export default CartPage;
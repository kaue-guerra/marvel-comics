import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ItemCart from "../../components/ItemCart"
import "./index.css"

import { removeItem } from '../../store/ducks/cart'
import { addMessage } from '../../store/ducks/layout'

import Header from '../../components/Header'

const CartPage = () => {

    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch();

    function removeItemCart(id) {
        dispatch(removeItem(id));

        dispatch(addMessage('Item removido com sucesso!'))
    }

    return (
        <div>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    {cart.length === 0 ? (<h2 className="col-sm-12 msg-cart text-center font-weight-bold">Sem HQs selecionadas</h2>)
                        : (
                            <React.Fragment>
                                <h2 className="col-sm-12 msg-cart text-dark text-center font-weight-bold">HQs Selecionadas</h2>
                                {cart.map((item) => <ItemCart key={item.id} item={item} removeItemCart={removeItemCart} />)}
                            </React.Fragment>
                        )}
                </div>
            </div>
        </div>

    )
}
export default CartPage;
import React from 'react';

const ItemCart = ({ item, removeItemCart }) => {
    return (
        <div className="col-sm-2 mt-1">
            <div className="card bg-light">
                <img className="card-img-top img-thumbnail img-card-cart" src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={item.title}></img>
                <div className="card-body">
                    <h5 className="card-title title-comic">{item.title}</h5>
                    <button onClick={() => removeItemCart(item.id)} className="btn btn-danger">
                        <i className="fa fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ItemCart;

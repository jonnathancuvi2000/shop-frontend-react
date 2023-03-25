import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Rating from './Rating';
import axios from 'axios';
import { useContext } from 'react';
import { Store } from '../Store';
import '../style-screens/Product.css'
import { publicRequest } from '../requesMethos';


function Product(props) {
    const { product } = props;
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart: { cartItems },
    } = state;

    const addToCartHadler = async (item) => {
        const existItem = cartItems.find((x) => x._id === item._id);
        const quantity = existItem ? existItem.quantity + 1 : 1;
        const { data } = await publicRequest.get(`/api/products/${item._id}`);
        if (data.countInStock < quantity) {
            window.alert("Lo sentimos. Producto esta fuera de Stock");
            return;
        }
        ctxDispatch({
            type: 'CART_ADD_ITEM',
            payload: { ...item, quantity },
        });

    }

    return (
        <Card className='product-info'>
            <Link to={`/product/${product.slug}`}>
                <img src={product.image} className="card-img-top" alt={product.name} />
            </Link>
            <Card.Body>
                <Link to={`/product/${product.slug}`}>
                    <Card.Title>{product.name}</Card.Title>
                </Link>
                <Rating rating={product.rating} numReviews={product.numReviews} />
                <Card.Text>${product.price}  </Card.Text>
                {product.countInStock === 0 ? <Button variant="light" disabled>Fuera de Stock</Button>
                    : <Button onClick={() => addToCartHadler(product)} >Agregar al Carrito</Button>
                }
            </Card.Body>
        </Card>
    );
}

export default Product;
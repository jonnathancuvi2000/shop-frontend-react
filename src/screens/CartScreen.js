import { useContext } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import MessageBox from "../components/MessageBox";
import { Store } from "../Store";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from 'axios';
import { publicRequest } from "../requesMethos";

export function CartScreen() {
    const navigate = useNavigate();
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart: { cartItems },
    } = state;

    const updateCartHadler = async (item, quantity) => {
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

    const removeItemHadler =  (item) => {
        ctxDispatch({
            type: 'CART_REMOVE_ITEM',
            payload: item,
        });
    }

    const checkouthandler = () => {
        navigate('/signin?redirect=/shipping')
    }

    return (
        <div className="contenedor">
            <Helmet>
                <title>Carrito de Compras</title>
            </Helmet>
            <h1>Carrito de Compras</h1>

            <Row>
                <Col md={8}>
                    {cartItems.length === 0 ? (
                        <MessageBox>
                            El carrito esta vacio. <Link to="/">Regresar a la Tienda</Link>
                        </MessageBox>
                    ) :
                        (
                            <ListGroup>
                                {cartItems.map((item) => (
                                    <ListGroup.Item key={item._id}>
                                        <Row className="align-items-center">

                                            <Col md={4}>
                                                <img src={item.image}
                                                    alt={item.name}
                                                    className="img-fluid rounded img-thumbnail"
                                                ></img>{' '}
                                                <Link to={`/product/${item.slug}`}>{item.name}</Link>
                                            </Col>

                                            <Col md={3}>
                                                <Button
                                                    variant="light"
                                                    onClick={() =>
                                                        updateCartHadler(item, item.quantity - 1)
                                                    }
                                                    disabled={item.quantity === 1}>
                                                    <i className="fas fa-minus-circle"></i>
                                                </Button> {' '}

                                                <span>{item.quantity}</span>{' '}

                                                <Button
                                                    variant="light"
                                                    onClick={() =>
                                                        updateCartHadler(item, item.quantity + 1)
                                                    }
                                                    disabled={item.quantity === item.countInStock}>
                                                    <i className="fas fa-plus-circle"></i>
                                                </Button>
                                            </Col>

                                            <Col md={3}>${item.price}</Col>

                                            <Col md={2}>
                                                <Button
                                                    variant="light"
                                                    onClick={() =>
                                                        removeItemHadler(item)
                                                    }
                                                >
                                                    <i className="fas fa-trash"></i>
                                                </Button>
                                            </Col>

                                        </Row>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        )}
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <h3>
                                        SubTotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                                        items) : $
                                        {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                                    </h3>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <div className="d-grid">
                                        <Button
                                            type="button"
                                            variant="warning"
                                            onClick={checkouthandler}
                                            disabled={cartItems.length === 0}
                                        >
                                            Realizar Pago - Checkout
                                        </Button>
                                    </div>
                                </ListGroup.Item>

                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

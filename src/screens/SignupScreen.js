import { Link, useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';
import Axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Store } from '../Store'
import { getError } from '../utils';
import { toast } from 'react-toastify';
import { publicRequest } from '../requesMethos';

export function SignupScreen() {

    const navigate = useNavigate();

    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo } = state;
    const submitHandler = async (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            toast.error('Las contraseña no coincide');
            return;
        }
        try {
            const { data } = await publicRequest.post('/api/users/signup', { // with this we have contact with the backend
                name,
                email,
                password,
            });
            ctxDispatch({ type: 'USER_SIGNIN', payload: data });
            localStorage.setItem('userInfo', JSON.stringify(data));
            navigate(redirect || '/');
        } catch (err) {
            toast.error(getError(err));
            // alert(getError(err));
        }
    };

    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }
    }, [navigate, redirect, userInfo]);

    return (
        <Container className="small-container">
            <Helmet>
                <title>Registrarse</title>
            </Helmet>
            <h1 className="my-3">Registrarse</h1>
            <Form onSubmit={submitHandler}>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control onChange={(e) => setName(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" required onChange={(e) => setEmail(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Contrasena</Form.Label>
                    <Form.Control type="password" required onChange={(e) => setPassword(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Confirmar Contrasena</Form.Label>
                    <Form.Control type="password" required onChange={(e) => setconfirmPassword(e.target.value)}></Form.Control>
                </Form.Group>

                <div className="mb-3">
                    <Button type="submit">Registrarse</Button>
                </div>

                <div className="mb-3">
                    Ya tienes un cuenta? {" "}
                    <Link to={`/signup?redirect=${redirect}`}>Crear una Cuenta</Link>
                </div>
            </Form>
        </Container>
    )
}
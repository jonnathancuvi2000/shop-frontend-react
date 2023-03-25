import React from 'react'
import '../style-componets/Footer.css';

export default function Footer() {
    return (
        <div className="footer">
            {/* <div className="top">
                <div className="item">
                    <h1>Categorias</h1>
                    <span>Mujer</span>
                    <span>Hombre</span>
                    <span>Zapatos</span>
                    <span>Accesorios</span>
                    <span>Nuevos Productos</span>
                </div>
                <div className="item">
                    <h1>Enlaces</h1>
                    <span>Home</span>
                    <span>Carrito</span>
                    <span>Productos</span>
                </div>
                <div className="item">
                    <h1>About</h1>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequuntur adipisci quam, aspernatur sapiente, tenetur blanditiis reprehenderit suscipit mollitia quis necessitatibus magnam, laborum assumenda perferendis ut modi ipsam similique officiis.
                    </span>
                </div>
                <div className="item">
                    <h1>Contactanos</h1>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequuntur adipisci quam, aspernatur sapiente, tenetur blanditiis reprehenderit suscipit mollitia quis necessitatibus magnam, laborum assumenda perferendis ut modi ipsam similique officiis.
                    </span>
                </div>
            </div> */}
            <div className="botton">
                <div className="left">
                    <span className="logo">Store</span>
                    <span className="copyright">Copyright 2023. Todos los derechos reservados</span>
                </div>
                <div className="right">
                    <img src="/images/payment.png" alt="" />
                </div>
            </div>
        </div>
    )
}

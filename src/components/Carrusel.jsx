import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export function Carrusel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img src="https://www.laguiaclub.com/sites/default/files/styles/bannerportada/public/2024-10/Template%20Banner%20La%20Gu%C3%ADa_7.jpg?itok=Wafi_GWl" alt="" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://lucesdecatedral.com/wp-content/uploads/2025/03/Escapada-Gastronomica-en-Alicante-Saborea-la-Autentica-Cocina-Mediterranea-en-el-Centro.jpg" alt="" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://haciendaguzman.com/cdn/shop/files/HG-Blog-1920x600-tendencias-gastronomicas-2024.jpg?v=1704200590" alt="" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}


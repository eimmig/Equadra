import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import './HomePage.css';

const HomePage = () => {

    return (
        <>
        <div className="back">
            <div className="header">
                <title>EQuadra - Painel</title>

                <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>

                <a href="#" className="logo"> <i className="far fa-basketball-ball logo"></i> EQuadra </a>

                <nav className="navbar">
                    <a href="#home">Início</a>
                    <a href="#features">Basquete</a>
                    <a href="#products">Vôlei</a>
                    <a href="#categories">Futebol</a>
                    <a href="#review">Cadastrar Quadra</a>
                </nav>

                <div className="icons">
                    <div className="fas fa-user" id="login-btn"></div>
                </div>

            </div>

            <section className="home" id="home">

                <div className="content">
                    <h3>Encontre e  <span>reserve</span> quadras esportivas</h3>
                    <p>Tudo de maneira simples e moderna!</p>
                    <a href="#features" className="btn">Vamos lá</a>
                </div>

                </section>
                <section className="features" id="features">

                <h1 className="heading"><span>Basquete</span> </h1>

                <div className="box-container">

                    <div className="box">
                        <img src="/public/background.jpg" alt=""/>
                        <h3>vegitables</h3>
                        <p>upto 45% off</p>
                        <a href="#" className="btn">Reservar</a>
                    </div>

                    <div className="box">
                        <img src="/public/background.jpg" alt=""/>
                        <h3>fresh fruits</h3>
                        <p>upto 45% off</p>
                        <a href="#" className="btn">Reservar</a>
                    </div>

                    <div className="box">
                        <img src="/public/background.jpg" alt=""/>
                        <h3>dairy products</h3>
                        <p>upto 45% off</p>
                        <a href="#" className="btn">Reservar</a>
                    </div>

                    <div className="box">
                        <img src="/public/background.jpg" alt=""/>
                        <h3>fresh meat</h3>
                        <p>upto 45% off</p>
                        <a href="#" className="btn">Reservar</a>
                    </div>
                </div>

            </section>

            <section className="features" id="products">

                <h1 className="heading"><span>Vôlei</span> </h1>

                <div className="box-container">

                    <div className="box">
                        <img src="/public/background.jpg" alt=""/>
                        <h3>vegitables</h3>
                        <p>upto 45% off</p>
                        <a href="#" className="btn">Reservar</a>
                    </div>

                    <div className="box">
                        <img src="/public/background.jpg" alt=""/>
                        <h3>fresh fruits</h3>
                        <p>upto 45% off</p>
                        <a href="#" className="btn">Reservar</a>
                    </div>

                    <div className="box">
                        <img src="/public/background.jpg" alt=""/>
                        <h3>dairy products</h3>
                        <p>upto 45% off</p>
                        <a href="#" className="btn">Reservar</a>
                    </div>

                    <div className="box">
                        <img src="/public/background.jpg" alt=""/>
                        <h3>fresh meat</h3>
                        <p>upto 45% off</p>
                        <a href="#" className="btn">Reservar</a>
                    </div>

                </div>


            </section>

            <section className="features" id="categories">

                <h1 className="heading"><span>Futebol</span> </h1>

                <div className="box-container">

                    <div className="box">
                        <img src="/public/background.jpg" alt=""/>
                        <h3>vegitables</h3>
                        <p>upto 45% off</p>
                        <a href="#" className="btn">Reservar</a>
                    </div>

                    <div className="box">
                        <img src="/public/background.jpg" alt=""/>
                        <h3>fresh fruits</h3>
                        <p>upto 45% off</p>
                        <a href="#" className="btn">Reservar</a>
                    </div>

                    <div className="box">
                        <img src="/public/background.jpg" alt=""/>
                        <h3>dairy products</h3>
                        <p>upto 45% off</p>
                        <a href="#" className="btn">Reservar</a>
                    </div>

                    <div className="box">
                        <img src="/public/background.jpg" alt=""/>
                        <h3>fresh meat</h3>
                        <p>upto 45% off</p>
                        <a href="#" className="btn">Reservar</a>
                    </div>

                </div>

            </section>

            <div className="footer">

            <section>

                <div className=" box-container">

                    <div className=" box">
                        <h3> EQuadra </h3>
                        <div className=" share">
                            <a href="https://www.facebook.com/EduardoImmig232/" className="fab fa-facebook-f"></a>
                            <a href="https://twitter.com/home" className="fab fa-twitter"></a>
                            <a href="https://www.instagram.com/eduardo.immig/" className="fab fa-instagram"></a>
                            <a href="https://www.linkedin.com/in/eduardo-immig-639373161/" className="fab fa-linkedin"></a>
                        </div>
                    </div>

                    <div className=" box">
                        <h3>Informações</h3>
                        <a href="https://github.com/eimmig" className="links"> <i className="fab fa-github"></i> eimmig </a>
                        <a href="#" className="links"> <i className="fas fa-phone"></i> (49)98422-1527 </a>
                        <a href="#" className="links"> <i className="fas fa-envelope"></i> eduardo-immig@hotmail.com </a>
                        <a href="#" className="links"> <i className="fas fa-map-marker-alt"></i> Pato Branco - PR </a>
                    </div>

                    <div className=" box">
                        <h3>Acesso Rápido</h3>
                        <a href="#home" className="links"> <i className="fas fa-arrow-right"></i> Início </a>
                        <a href="#features" className="links"> <i className="fas fa-arrow-right"></i> Basquete </a>
                        <a href="#products" className="links"> <i className="fas fa-arrow-right"></i> Vôlei </a>
                        <a href="#categories" className="links"> <i className="fas fa-arrow-right"></i> Futebol </a>
                        <a href="#review" className="links"> <i className="fas fa-arrow-right"></i> Cadastrar Quadra </a>
                    </div>

                </div>

                <div className=" credit"> Final Project for <span> MJV </span> Java School </div>

            </section>

            </div>

            </div>
        </>
    );
};
export default HomePage;
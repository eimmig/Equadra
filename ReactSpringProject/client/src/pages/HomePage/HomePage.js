import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import HomeService from "../../services/Auth/homeService";
import AuthService from '../../services/Auth/auth.service';
import './HomePage.css';

const HomePage = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const onClickLogout = () => {
        AuthService.logout();
        window.location.reload();
      }

    const loadData = () => {
        HomeService.findAll().then(response => {
            setData(response.data);
        }).catch((error) => {
        });
    }
    return (
        <>
            <div className="backHome Home htmlHome">


                <div className="headerHome">
                    <title>EQuadra - Painel</title>

                    <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />

                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />

                    <a href="#" className="logoHome"> <i className="far fa-basketball-ball logoHome"></i> EQuadra </a>

                    <nav className="navbarHome">
                        <a href="#home">Início</a>
                        <a href="#features">Basquete</a>
                        <a href="#products">Vôlei</a>
                        <a href="#categories">Futebol</a>
                        <a href="/newquadra">Cadastrar Quadra</a>
                    </nav>

                    <div className="iconsHome">
                        <div className="fas fa-user" id="login-btn" onClick={onClickLogout}></div>
                    </div>

                </div>
                <div className="bodyHome">
                    <section className="homeHome sectionHome" id="home">

                        <div className="contentHome">
                            <h3>Encontre e  <span>reserve</span> quadras esportivas</h3>
                            <p>Tudo de maneira simples e moderna!</p>
                            <a href="#features" className="btnHome">Vamos lá</a>
                        </div>

                    </section>
                    <section className="featuresHome sectionHome" id="features">

                        <h1 className="headingHome"><span>Basquete</span> </h1>

                        <div className="box-containerHome">

                            <div className="boxHome">
                                <img src="/public/background.jpg" alt="" />
                                <h3>vegitables</h3>
                                <p>upto 45% off</p>
                                <a href="#" className="btnHome">Reservar</a>
                            </div>

                           
                        </div>

                    </section>

                    <section className="featuresHome sectionHome" id="products">

                        <h1 className="headingHome"><span>Vôlei</span> </h1>

                        <div className="box-containerHome">

                            <div className="boxHome">
                                <img src="/public/background.jpg" alt="" />
                                <h3>vegitables</h3>
                                <p>upto 45% off</p>
                                <a href="#" className="btnHome">Reservar</a>
                            </div>

                        </div>


                    </section>

                    <section className="featuresHome sectionHome" id="categories">

                        <h1 className="headingHome"><span>Futebol</span> </h1>

                        <div className="box-containerHome">

                            <div className="boxHome">
                                <img src="/public/background.jpg" alt="" />
                                <h3>vegitables</h3>
                                <p>upto 45% off</p>
                                <a href="#" className="btnHome">Reservar</a>
                            </div>

                        </div>

                    </section>

                </div>

                <div className="footerHome">

                    <section className="sectionHome">

                        <div className=" box-containerHome">

                            <div className="testHome">
                                <h3> EQuadra </h3>
                                <div className="shareHome">
                                    <a href="https://www.facebook.com/EduardoImmig232/" className="fab fa-facebook-f"></a>
                                    <a href="https://twitter.com/home" className="fab fa-twitter"></a>
                                    <a href="https://www.instagram.com/eduardo.immig/" className="fab fa-instagram"></a>
                                    <a href="https://www.linkedin.com/in/eduardo-immig-639373161/" className="fab fa-linkedin"></a>
                                </div>
                            </div>

                            <div className="testHome">
                                <h3>Informações</h3>
                                <a href="https://github.com/eimmig" className="linksHome"> <i className="fab fa-github"></i> eimmig </a>
                                <a href="#" className="linksHome"> <i className="fas fa-phone"></i> (49)98422-1527 </a>
                                <a href="#" className="linksHome"> <i className="fas fa-paper-plane"></i> eduardo-immig@hotmail.com </a>
                                <a href="#" className="linksHome"> <i className="fas fa-map-marker-alt"></i> Pato Branco - PR </a>
                            </div>

                            <div className="testHome">
                                <h3>Acesso Rápido</h3>
                                <a href="#home" className="linksHome"> <i className="fas fa-arrow-right"></i> Início </a>
                                <a href="#features" className="linksHome"> <i className="fas fa-arrow-right"></i> Basquete </a>
                                <a href="#products" className="linksHome"> <i className="fas fa-arrow-right"></i> Vôlei </a>
                                <a href="#categories" className="linksHome"> <i className="fas fa-arrow-right"></i> Futebol </a>
                                <a href="#review" className="linksHome"> <i className="fas fa-arrow-right"></i> Cadastrar Quadra </a>
                            </div>

                        </div>

                        <div className=" creditHome"> Final Project for <span> MJV </span> Java School </div>
                    </section>

                </div>

            </div>


        </>
    );
};
export default HomePage;
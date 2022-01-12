import React, { Component } from 'react'
import { Body } from '../body/body.component';
import { Footer } from '../footer/footer.component';
import { Header } from '../header/header.component';
import './home.styles.css';

export const Home = () => {
    return <div className="home">
        <div>
            <Header />
        </div>
        <div>
            <Body />
        </div>
        <div>
            <Footer />
        </div>

    </div>
}

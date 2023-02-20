import React from 'react';
import './layout.css';
import Footer from './footer';
import Header from './header';
import ViewButton from '../views/ViewButton';
import InputForm from '../views/InputForm';
import { Link } from "react-router-dom";

const layout = () => {
    return (
        <div className="layout">
            <Header />
                <main className='main'>

                    <ViewButton />        

                </main>

            <Footer />
        </div>
    )
}

export default layout

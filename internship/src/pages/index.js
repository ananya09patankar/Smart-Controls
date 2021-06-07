import React from 'react';
import { NavBtn, NavBtnLink } from '../components/Navbar/NavbarElements';


const Home = () => {
    return ( <
        >
        <
        div style = {
            {
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '50px',
                height: '500px',

                backgroundImage: `url("https://smartcontrols.in/wp-content/uploads/2020/07/Industry-4.0-Banner-1536x800.jpg") `

            }
        } >
        <
        h1 > Smart Mix Digital < /h1> <
        br / > < br / >
        <
        h3 > Let’ s reinvent businesses into smart businesses, < br / > with an innovative Industrie 4.0 solutions provider
        for Intelligent manufacturing. < /h3> <
        NavBtn style = {
            { marginLeft: 500, marginTop: 40 }
        } >
        <
        NavBtnLink to = '/signin' > GET ESTIMATE < /NavBtnLink> < /
        NavBtn >

        <
        /div>


        

        <
        />
    );
};

export default Home;
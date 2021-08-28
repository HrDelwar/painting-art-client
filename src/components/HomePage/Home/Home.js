import React from 'react';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import RecentWork from '../RecentWork/RecentWork';
import Review from '../Review/Review';
import Services from '../Services/Services';

const Home = () => {
    document.title = "Home || Painting Art";
    return (
        <>
            <Header />
            <RecentWork />
            <Services />
            <Blogs />
            <Review />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;
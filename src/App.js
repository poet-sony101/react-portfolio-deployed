import React, { useState, useEffect } from 'react';
import Navbar from "./components/NavBar/navbar";
import Intro from './components/Intro/intro';
import Skills from "./components/Skills/skills";
import Experience from "./components/Experience/experience";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import About from "./components/About/about";
import Blog from "./components/Blog/blog";
import { scroller } from 'react-scroll';

function App() {
    const isAboutHash = () => {
        const hash = window.location.hash;
        return hash === '#/about' || hash === '#about';
    };

    const isBlogHash = () => {
        const hash = window.location.hash;
        return hash === '#/blog' || hash === '#blog';
    };

    const [currentView, setCurrentView] = useState(() => {
        if (isAboutHash()) return 'about';
        if (isBlogHash()) return 'blog';
        return 'home';
    });

    useEffect(() => {
        const handleHashChange = () => {
            if (isAboutHash()) {
                setCurrentView('about');
                window.scrollTo(0, 0);
            } else if (isBlogHash()) {
                setCurrentView('blog');
                window.scrollTo(0, 0);
            } else {
                setCurrentView('home');
            }
        };

        window.addEventListener('hashchange', handleHashChange);
        window.addEventListener('popstate', handleHashChange);
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
            window.removeEventListener('popstate', handleHashChange);
        };
    }, []);

    const navigateTo = (view, sectionId) => {
        if (view === 'about') {
            setCurrentView('about');
            window.location.hash = '#/about';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (view === 'blog') {
            setCurrentView('blog');
            window.location.hash = '#/blog';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            setCurrentView('home');
            if (sectionId) {
                window.location.hash = `#${sectionId}`;
                setTimeout(() => {
                    scroller.scrollTo(sectionId, {
                        smooth: true,
                        duration: 500,
                        offset: sectionId === 'intro' ? -100 : -80
                    });
                }, 60);
            } else {
                window.location.hash = '';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="App">
            <Navbar currentView={currentView} onNavigate={navigateTo} />
            
            {currentView === 'about' ? (
                <About onBack={() => navigateTo('home')} onNavigate={navigateTo} />
            ) : currentView === 'blog' ? (
                <Blog onBack={() => navigateTo('home')} onNavigate={navigateTo} />
            ) : (
                <>
                    <Intro onNavigate={navigateTo} />
                    <Skills />
                    <Experience />
                    <Works />
                    <Contact />
                </>
            )}

            <Footer currentView={currentView} onNavigate={navigateTo} />
        </div>
    );
}

export default App;

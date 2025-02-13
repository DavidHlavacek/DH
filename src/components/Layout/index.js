import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Sidebar from '../Sidebar';
import StarBackground from '../StarBackground';
import './index.scss';
import PulsatingParagraphs from '../../utils/PulsatingParagraphs';

const Layout = () => {
    const [isMobile, setIsMobile] = useState(
        window.innerWidth <= 800 || 
        window.innerHeight <= 800 || 
        (CSS.supports && CSS.supports('-webkit-touch-callout', 'none'))
    );

    useEffect(() => {
        const handleResize = () => setIsMobile(
            window.innerWidth <= 800 || 
            window.innerHeight <= 800 || 
            (CSS.supports && CSS.supports('-webkit-touch-callout', 'none'))
        );
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='App'>
            <StarBackground />
            <div className='grid-container'>
                {!isMobile && (
                    <div className='sidebar'>
                        <Sidebar />
                    </div>
                )}
                <div className='page'>
                    <Outlet />
                </div>
            </div>
            {isMobile && <Sidebar />}
        </div>
    );
}

export default Layout;

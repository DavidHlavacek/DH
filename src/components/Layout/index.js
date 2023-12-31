import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';
import PulsatingParagraphs from '../../utils/PulsatingParagraphs';

const Layout = () => {
    return (
        <div className='App'>
            <div className='grid-container'>
                <div className='sidebar'>
                <Sidebar />
                </div>
                <div className='page'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Layout;

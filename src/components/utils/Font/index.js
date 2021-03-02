import React, { useContext } from 'react';
import { DataContext } from '../../../containers/Dashboard';
import './index.css';
import '../DarkMode/index.css';

export const Header = ({ children, fontSize, fontWeight }) => {
    const dataContext = useContext(DataContext);
    return (
        <div className={dataContext.state.darkMode ? 'header-font dark-mode-header' : 'header-font light-mode'} 
             style={{ fontSize, fontWeight }}
        >
            { children }
        </div>
    )
};

export const Subheader = ({ children, fontSize, fontWeight }) => {
    const dataContext = useContext(DataContext);
    return (
        <div className={dataContext.state.darkMode ? 'subheader-font dark-mode-header' : 'subheader-font light-mode'} 
             style={{ fontSize, fontWeight }}
        >
            { children }
        </div>
    )
};

export const SubheaderSpan = ({ children, fontSize, fontWeight }) => {
    const dataContext = useContext(DataContext);
    return (
        <div className={dataContext.state.darkMode ? 'subheader-font dark-mode-header' : 'subheader-font light-mode'} 
             style={{ fontSize, fontWeight }}
        >
            { children }
        </div>
    )
};

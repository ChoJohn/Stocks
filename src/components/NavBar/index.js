import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import logo from './logo.svg';
import overviewIcon from './overview.svg';
import overviewDarkIcon from './overviewDark.svg';
import reportIcon from './reports.svg';
import reportDarkIcon from './reportsDark.svg';
import setttingsIcon from './settings.svg';
import settingsDarkIcon from './settingsDark.svg';
import './index.css';
import '../utils/DarkMode/index.css';
import { DataContext } from '../../containers/Dashboard';

const NavBar = () => {
    const path = useLocation().pathname;
    const dataContext = useContext(DataContext);
    
    // DARK MODE
    if (dataContext.state.darkMode) {
        return (
            <div className='navigation dark-mode-in'>
                <div className='app-name dark-mode'>
                    <img src={ logo } alt='logo' className='logo' />
                    Stonks
                </div>
                <ul className='navbar-list'>
                    <li className={ classNames(path === '/' && 'selected dark-mode-nav')}> 
                        <Link to='/'>
                            {
                                path === '/'
                                ? <>
                                    <div id='top' className='dark-mode-top'></div>
                                        <img src={ overviewDarkIcon } alt='overview icon' className='icons' />
                                        <span className='dark-mode'>Overview</span>
                                    <div id='bottom' className='dark-mode-bottom'></div>
                                </>
                                : <span>
                                    <img src={ overviewDarkIcon } alt='overview icon' className='icons' />
                                    <span className='dark-mode'>Overview</span>
                                </span>
                            }
                        </Link>
                    </li>
                    <li  className={ classNames(path.indexOf('/reports') > -1 && 'selected dark-mode-nav') }>
                        <Link to='/reports'>
                            {
                                path === '/reports'
                                ? <>
                                    <div id='top' className='dark-mode-top'></div>
                                        <img src={ reportDarkIcon } alt='report icon' className='icons' />
                                        <span className='dark-mode'>Reports</span>
                                    <div id='bottom' className='dark-mode-bottom'></div>
                                </>
                                : <span>
                                    <img src={ reportDarkIcon } alt='report icon' className='icons' />
                                    <span className='dark-mode'>Reports</span>
                                </span>
                            }
                        </Link>
                    </li>
                    <li  className={ classNames(path.indexOf('/settings') > -1  && 'selected dark-mode-nav') }>
                        <Link to='settings'>
                            {
                                path === '/settings'
                                ? <>
                                    <div id='top' className='dark-mode-top'></div>
                                        <img src={ settingsDarkIcon } alt='setttings icon' className='icons' />
                                        <span className='dark-mode'>Settings</span>
                                    <div id='bottom' className='dark-mode-bottom'></div>
                                </>
                                : <span>
                                    <img src={ settingsDarkIcon } alt='setttings icon' className='icons' />
                                    <span className='dark-mode'>Settings</span>
                                </span>
                            }
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }

    // LIGHT MODE
    return (
        <div className='navigation light-mode-in' id='navigation'>
            <div className='app-name light-mode'>
                <img src={ logo } alt='logo' className='logo' />
                Stonks
            </div>
            <ul className='navbar-list'>
                <li className={ classNames(path === '/' && 'selected light-mode-nav')}> 
                    <Link to='/'>
                        {
                            path === '/'
                            ? <>
                                <div id='top' className='light-mode-top'></div>
                                    <img src={ overviewIcon } alt='overview icon' className='icons' />
                                    Overview
                                <div id='bottom' className='light-mode-bottom'></div>
                            </>
                            : <span>
                                <img src={ overviewIcon } alt='overview icon' className='icons' />
                                Overview
                            </span>
                        }
                    </Link>
                </li>
                <li  className={ classNames(path.indexOf('/reports') > -1 && 'selected light-mode-nav') }>
                    <Link to='/reports'>
                        {
                            path === '/reports'
                            ? <>
                                <div id='top' className='light-mode-top'></div>
                                    <img src={ reportIcon } alt='report icon' className='icons' />
                                    Reports
                                <div id='bottom' className='light-mode-bottom'></div>
                            </>
                            : <span>
                                <img src={ reportIcon } alt='report icon' className='icons' />
                                Reports
                            </span>
                        }
                    </Link>
                </li>
                <li  className={ classNames(path.indexOf('/settings') > -1  && 'selected light-mode-nav') }>
                    <Link to='settings'>
                        {
                            path === '/settings'
                            ? <>
                                <div id='top' className='light-mode-top'></div>
                                    <img src={ setttingsIcon } alt='setttings icon' className='icons' />
                                    Settings
                                <div id='bottom' className='light-mode-bottom'></div>
                            </>
                            : <span>
                                <img src={ setttingsIcon } alt='setttings icon' className='icons' />
                                Settings
                            </span>
                        }
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;
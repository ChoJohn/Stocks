import React, { useContext } from 'react';
import { DataContext } from '../../../containers/Dashboard';
import './index.css';
import { SubheaderSpan } from '../../utils/Font';
import '../../utils/DarkMode/index.css';

const DarkMode = () => {
    const dataContext = useContext(DataContext);

    return (
        <div>
            <div className='dark-mode-setting'>
                <SubheaderSpan>Dark Mode</SubheaderSpan>
                <button onClick={() => dataContext.dispatch({type: 'TOGGLE_DARK_MODE'})}
                        className={dataContext.state.darkMode ? 'dark-mode-in toggle' : 'light-mode-out toggle'}
                >
                    {
                        dataContext.state.darkMode
                        ? <span className='dark-mode button-font'>ON</span>
                        : <span className='light-mode button-font'>OFF</span>
                    }
                </button>
            </div>
        </div>
    )
};

export default DarkMode;
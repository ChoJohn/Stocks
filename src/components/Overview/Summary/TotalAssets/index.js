import React, { useContext } from 'react';
import { DataContext } from '../../../../containers/Dashboard';
import './index.css';
import '../../../utils/DarkMode/index.css';
import totalIcon from './total.svg';
import totalDarkIcon from './totalDark.svg';
import { NumberFormat } from '../../../../utils';

const TotalAssets = () => {
    const dataContext = useContext(DataContext);
    
    if (dataContext.state.darkMode) {
        // DARK MODE
        return (
            <div className='summary-card dark-mode-out'>
                <div className='total-summary-container'>
                    <div className='icon-container dark-mode-in'>
                        <img src={totalDarkIcon} alt='total asset icon' className='icon' />
                    </div>
                    <div className='summary-container'>
                        <div className='summary'>
                            <h2 className='summary-title-font dark-mode'>Total Assets</h2>
                            <div className='summary-font dark-mode'>${NumberFormat(dataContext.state.account.allocationTotal.toFixed(2))}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    // LIGHT MODE
    return (
        <div className='summary-card light-mode-out'>
            <div className='total-summary-container'>
                <div className='icon-container light-mode-in'>
                    <img src={totalIcon} alt='total asset icon' className='icon' />
                </div>
                <div className='summary-container'>
                    <div className='summary'>
                        <h2 className='summary-title-font light-mode'>Total Assets</h2>
                        <div className='summary-font light-mode'>${NumberFormat(dataContext.state.account.allocationTotal.toFixed(2))}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TotalAssets;
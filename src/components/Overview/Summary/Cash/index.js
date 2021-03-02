import React, { useContext } from 'react';
import { DataContext } from '../../../../containers/Dashboard';
import './index.css';
import '../../../utils/DarkMode/index.css';
import cashIcon from './cash.svg';
import cashDarkIcon from './cashDark.svg';
import { NumberFormat } from '../../../../utils';

const Cash = () => {
    const dataContext = useContext(DataContext);

    if (dataContext.state.darkMode) {
        // DARK MODE
        return (
            <div className='summary-card dark-mode-out'>
                <div className='cash-summary-container'>
                    <div className='icon-container dark-mode-in'>
                        <img src={cashDarkIcon} alt='cash icon' className='icon' />
                    </div>
                    <div className='summary-container'>
                        <div className='summary'>
                            <h2 className='summary-title-font dark-mode'>Cash</h2>
                            <div className='summary-font dark-mode'>${NumberFormat((dataContext.state.account.allocationTotal - dataContext.state.account.totalInvestment).toFixed(2))}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        // LIGHT MODE
        <div className='summary-card light-mode-out'>
            <div className='cash-summary-container'>
                <div className='icon-container light-mode-in'>
                    <img src={cashIcon} alt='cash icon' className='icon' />
                </div>
                <div className='summary-container'>
                    <div className='summary'>
                        <h2 className='summary-title-font light-mode'>Cash</h2>
                        <div className='summary-font light-mode'>${NumberFormat((dataContext.state.account.allocationTotal - dataContext.state.account.totalInvestment).toFixed(2))}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Cash;
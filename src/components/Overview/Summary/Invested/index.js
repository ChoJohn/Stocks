import React, { useContext } from 'react';
import { DataContext } from '../../../../containers/Dashboard';
import './index.css';
import '../../../utils/DarkMode/index.css';
import investedIcon from './invested.svg';
import investedDarkIcon from './investedDark.svg';
import { NumberFormat } from '../../../../utils';

const Invested = () => {
    const dataContext = useContext(DataContext);

    if (dataContext.state.darkMode) {
        return (
            <div className='summary-card dark-mode-out'>
                <div className='invested-summary-container'>
                    <div className='icon-container dark-mode-in'>
                        <img src={investedDarkIcon} alt='invested icon' className='icon' />
                    </div>
                    <div className='summary-container'>
                        <div className='summary'>
                            <h2 className='summary-title-font dark-mode'>Invested</h2>
                            <div className='summary-font dark-mode'>${NumberFormat(dataContext.state.account.totalInvestment.toFixed(2))}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='summary-card light-mode-out'>
            <div className='invested-summary-container'>
                <div className='icon-container light-mode-in'>
                    <img src={investedIcon} alt='invested icon' className='icon' />
                </div>
                <div className='summary-container'>
                    <div className='summary'>
                        <h2 className='summary-title-font light-mode'>Invested</h2>
                        <div className='summary-font light-mode'>${NumberFormat(dataContext.state.account.totalInvestment.toFixed(2))}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Invested;
import React, { useContext, useState } from 'react';
import StockList from './StockList';
import PieChart from './PercentagePieChart';
import './index.css';
import '../../utils/DarkMode/index.css';
import { DataContext } from '../../../containers/Dashboard';
import { Subheader } from '../../utils/Font';

const Percentage = () => {
    const [ activeIndex, setActiveIndex ] = useState(0);

    const handleUpdate = (newIndex) => {
        setActiveIndex(newIndex);
    };

    const dataContext = useContext(DataContext);

    return (
        <section className={dataContext.state.darkMode 
                            ? 'percentage-card dark-mode-out' 
                            : 'percentage-card light-mode-out'}>
            <Subheader className={dataContext.state.darkMode
                            ? 'overview-font dark-mode'
                            : 'overview-font light-mode'}>
                    Portfolio Percentage
            </Subheader>
                <div className='percentage-pie-chart'>
                    <PieChart activeIndex={activeIndex} handleUpdate={handleUpdate} />
                </div>
                <div className='percentage-list'>
                    <StockList activeIndex={activeIndex} handleUpdate={handleUpdate} />
                </div>
        </section>
    )
};

export default Percentage;
import React, { useContext, useState } from 'react';
import PieChart from './AllocationPieChart';
import StockList from './StockList';
import './index.css';
import '../../utils/DarkMode/index.css';
import { Subheader } from '../../utils/Font';
import { DataContext } from '../../../containers/Dashboard';
  
const Allocations = () => {
    const [ activeIndex, setActiveIndex ] = useState(0);

    const handleUpdate = (newIndex) => {
        setActiveIndex(newIndex);
    };

    const dataContext = useContext(DataContext);

    return (
        <div className={dataContext.state.darkMode 
                        ? 'allocation-card dark-mode-out' 
                        : 'allocation-card light-mode-out'}
        >
            <Subheader>Portfolio Allocations</Subheader>
            <div className='allocations'>
                <PieChart activeIndex={activeIndex} handleUpdate={handleUpdate} />
                <StockList activeIndex={activeIndex} handleUpdate={handleUpdate} />
            </div>
        </div>
    );
};
  
export default Allocations;

import React, { useContext } from 'react';
import { DataContext } from '../../../../containers/Dashboard';
import './index.css';
import '../../../utils/DarkMode/index.css';

const AllocationList = ({ activeIndex, handleUpdate }) => {
    const dataContext = useContext(DataContext);
    
    if (dataContext.state.darkMode) {
        // DARK MODE
        return (
            <div className='allocation-list'>
                <ul className='allocation-container'>
                    {
                        dataContext.state.account.allocations.map((type, index) => {
                            return (
                                <li key={index} 
                                    className={index === activeIndex ? 'type selected dark-mode-out' : 'type dark-mode'}
                                    onMouseEnter={() => handleUpdate(index)}
                                >
                                    <span className='investment-type'>
                                        <span className='allocation-label' 
                                            style={{backgroundColor: dataContext.state.colours[index]}}
                                        ></span>
                                        {type.investmentType}
                                    </span>
                                    <span className='allocation-market-value'>${type.marketValue.toFixed(2)}</span>
                                    <span className='allocation-percentage'>{type.percentage}%</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

    // LIGHT MODE
    return (
        <div className='allocation-list'>
            <ul className='allocation-container'>
                {
                    dataContext.state.account.allocations.map((type, index) => {
                        return (
                            <li key={index} 
                                className={index === activeIndex ? 'type selected' : 'type'}
                                onMouseEnter={() => handleUpdate(index)}
                            >
                                <span className='investment-type'>
                                    <span className='allocation-label' 
                                        style={{backgroundColor: dataContext.state.colours[index]}}
                                    ></span>
                                    {type.investmentType}
                                </span>
                                <span className='allocation-market-value'>${type.marketValue.toFixed(2)}</span>
                                <span className='allocation-percentage'>{type.percentage}%</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
};

export default AllocationList;
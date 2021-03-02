import React, { useContext } from 'react';
import { DataContext } from '../../../../containers/Dashboard';
import './index.css';
import '../../../utils/DarkMode/index.css';

const StockList = ({ activeIndex, handleUpdate }) => {
    const dataContext = useContext(DataContext);

    if (dataContext.state.darkMode) {
        return (
            <div id='stock-list'>
                <ul className='stock-container'>
                    {
                        dataContext.state.stocks.map((stock, index) => {
                            return (
                                <li key={index}
                                    className={activeIndex === index 
                                                ? 'stock selected dark-mode-out'
                                                : 'stock dark-mode'}
                                    onMouseEnter={() => handleUpdate(index)}
                                >
                                    <span className='stock-label' 
                                        style={{backgroundColor: dataContext.state.colours[index]}}
                                    ></span>
                                    {stock.symbol} - {stock.companyName}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }

    return (
        <div id='stock-list'>
            <ul className='stock-container'>
                {
                    dataContext.state.stocks.map((stock, index) => {
                        return (
                            <li key={index}
                                className={activeIndex === index 
                                            ? 'stock selected light-mode-out'
                                            : 'stock light-mode'}
                                onMouseEnter={() => handleUpdate(index)}
                            >
                                <span className='stock-label' 
                                    style={{backgroundColor: dataContext.state.colours[index]}}
                                ></span>
                                {stock.symbol} - {stock.companyName}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default StockList;
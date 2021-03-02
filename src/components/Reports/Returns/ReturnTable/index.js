import React, { useContext } from 'react';
import { DataContext } from '../../../../containers/Dashboard';
import './index.css';
import '../../../utils/DarkMode/index.css';

const tableHeader = [
    'Stock',
    'Curr',
    'Asset Type',
    'Qty',
    'Cost / Share',
    'Market Price',
    'Init Cost',
    'Market Val',
    'P&L',
    '% Return',
    '% Portfolio'
];

const ReturnTable = () => {
    const dataContext = useContext(DataContext);
    // const data = require('../../../../Data/qqq');

    return (
        <div className='return-table-container'>
            <table className={dataContext.state.darkMode 
                            ? 'return-table dark-mode'
                            : 'return-table light-mode'}>
                <thead>
                    <tr>
                        {
                            tableHeader.map((header, index) => {
                                return (
                                    <th key={index} className={dataContext.state.darkMode 
                                                               ? 'table-header-font dark-mode'
                                                               : 'table-header-font light-mode'}>{header}</th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        dataContext.state.stocks.map((stock, index) => {
                            const positionCost = (stock.quanity * stock.averagePrice).toFixed(2);
                            return (
                                <tr key={index}>
                                    <td className='data-company'>
                                        <div className={dataContext.state.darkMode 
                                                               ? 'company-symbol dark-mode'
                                                               : 'company-symbol light-mode'}>
                                            {stock.symbol}
                                        </div>
                                        <div className={dataContext.state.darkMode 
                                                               ? 'company-name dark-mode'
                                                               : 'company-name light-mode'}>
                                            {stock.companyName}
                                        </div>
                                    </td>
                                    <td className='data'>
                                        {stock.currency}
                                    </td>
                                    <td className='data'>
                                        {stock.assetType}
                                    </td>
                                    <td className='data'>
                                        {stock.quanity}
                                    </td>
                                    <td className='data'>
                                        ${stock.averagePrice.toFixed(2)}
                                    </td>
                                    <td className='data'>
                                        {/* 
                                            API CURRENT PRICE
                                        */}
                                    </td>
                                    <td className='data'>
                                        ${positionCost}
                                    </td>
                                    <td className='data'>
                                        {/* 
                                            MARKETVALUE = API CURRENT PRICE * {stock.quanity} 
                                        */}
                                    </td>
                                    <td className='data'>
                                        {/* 
                                            P&L = {positionCost} - API CURRENT PRICE * {stock.quanity} 
                                        */}
                                    </td>
                                    <td className='data'>
                                        {/* FIGURE OUT % RETURN */}
                                    </td>
                                    <td className='data'>
                                        {/* {MARKETVALUE / dataContext.state.account.totalInvestment} */}
                                        {(stock.value / dataContext.state.account.totalInvestment * 100).toFixed(2)}%
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>
        </div>
    )
};

export default ReturnTable;


// stock | qty | avgPrice | marketValue | todayValue | Profit/Loss | portfolioPercentage
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
    'Yield %',
    'Expense Ratio',
    'Market Val',
    'P&L',
    '% Dividend',
    '% Portfolio'
];

const dividendCalculator = (stocks) => {
    let dividendSum = 0;
    stocks.forEach((stock) => {
        if (stock.dividendYield !== 0) {
            dividendSum += stock.value;
        }
    });
    return dividendSum;
};

const DividendTable = () => {
    const dataContext = useContext(DataContext);

    const dividendTotal = dividendCalculator(dataContext.state.stocks);
    const stockMarket = dataContext.state.currentStockValue.length ? dataContext.state.currentStockValue[0] : null;

    return (
        <div className='dividend-table-container'>
            <table className='dividend-table'>
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
                            if (stock.dividendYield === 0) return null;
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
                                        ${stockMarket ? Number(stockMarket.price).toFixed(2) : null}
                                    </td>
                                    <td className='data'>
                                        {stock.dividendYield}
                                    </td>
                                    <td className='data'>
                                        {stock.expenseRatio}%
                                    </td>
                                    <td className='data'>
                                        {/* 
                                            MARKETVALUE
                                        */}
                                        ${stockMarket ? (Number(stockMarket.price) * stock.quanity).toFixed(2) : null}
                                    </td>
                                    <td className='data'>
                                        {/* 
                                            P&L = {positionCost} - API CURRENT PRICE * {stock.quanity} 
                                        */}
                                        {stockMarket ? (positionCost - Number(stockMarket.price) * stock.quanity).toFixed(0) : null}
                                    </td>
                                    <td className='data'>
                                        {/* replace stock.value with API CURRENT PRICE */}
                                        {stockMarket ? (Number(stockMarket.price) / dividendTotal * 100).toFixed(2) : null}
                                    </td>
                                    <td className='data'>
                                        {/* {MARKETVALUE / dataContext.state.account.totalInvestment} */}
                                        {(stock.value / dataContext.state.account.totalInvestment * 100).toFixed(2)}
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

export default DividendTable;
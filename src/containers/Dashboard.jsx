import React, { useEffect, useReducer } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../routes';
import NavBar from '../components/NavBar';

const initialState = {
    stocks: [],
    colours: [],
    account: {
        allocations: [],
        allocationTotal: 0,
        totalInvestment: 0
    },
    darkMode: true
};

export const DataContext = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_DATA':
            return {
                ...state,
                stocks: action.stockPayload.stocks,
                colours: action.colourPayload,
                account: action.accountPayload.account
            };
        case 'TOGGLE_DARK_MODE':
            return {
                ...state,
                darkMode: !state.darkMode
            };
        default:
            return state;
    }
};

const Dashboard = () => {
    const stocksData = require('../Data/stocksData');
    const colours = require('../Data/colours');
    const accountData = require('../Data/account');
    
    const [ state, dispatch ] = useReducer(reducer, initialState);
    
    useEffect(() => {
        let newColour = colours.darkModeColours;
        if (state.darkMode) newColour = colours.darkModeColours;
        else newColour = colours.colours;
        
        dispatch({
            type: 'FETCH_DATA', 
            stockPayload: stocksData,
            colourPayload: newColour,
            accountPayload: accountData
        });
    }, [stocksData, colours, accountData, state.darkMode]);

    return (
        <DataContext.Provider value={{ state: state, dispatch: dispatch }}>
            <BrowserRouter>
                <div className={state.darkMode ? 'dashboard dark-mode' : 'dashboard light-mode'}>
                    <NavBar />
                    <Routes />
                </div>
            </BrowserRouter>
        </DataContext.Provider>
    );
};

export default Dashboard;

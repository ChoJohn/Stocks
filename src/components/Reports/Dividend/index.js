import React, { useContext } from 'react';
import './index.css';
import '../../utils/DarkMode/index.css';
import { Subheader } from '../../utils/Font';
import DividendTable from './DividendTable';
import { DataContext } from '../../../containers/Dashboard';

const Dividend = () => {
    const dataContext = useContext(DataContext);

    return (
        <div>
            <div className={dataContext.state.darkMode 
                            ? 'dividend-card dark-mode-out' 
                            : 'dividend-card light-mode-out'}>
                <Subheader>Dividend</Subheader>
                <DividendTable />
            </div>
        </div>
        
    )
};

export default Dividend;




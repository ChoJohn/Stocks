import React, { useContext } from 'react';
import './index.css';
import '../../utils/DarkMode/index.css';
import { Subheader } from '../../utils/Font';
import ReturnTable from './ReturnTable';
import { DataContext } from '../../../containers/Dashboard';

const Returns = () => {
    const dataContext = useContext(DataContext);

    return (
        <div>
            <div className={dataContext.state.darkMode 
                            ? 'returns-card dark-mode-out' 
                            : 'returns-card light-mode-out'}>
                <Subheader>Returns</Subheader>
                <ReturnTable />
            </div>
        </div>
        
    )
};

export default Returns;
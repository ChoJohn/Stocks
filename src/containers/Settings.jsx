import React from 'react';
import { Row, Column } from '../components/utils/FlexBox';
import { Header } from '../components/utils/Font';
import DarkMode from '../components/Settings/DarkMode';

const Settings = () => {
    return (
        <div className='setting-container'>
            <Header>Settings</Header>
            <Row>
                <Column grow={1}>
                    <DarkMode />
                </Column>
            </Row>
        </div>
    );
};

export default Settings;
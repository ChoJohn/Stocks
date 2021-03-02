import React from 'react';
import { Row, Column } from '../components/utils/FlexBox';
import { Header } from '../components/utils/Font';
import Returns from '../components/Reports/Returns';
import Dividend from '../components/Reports/Dividend';

const ReportsContainer = () => {
    return (
        <div className='report-container'>
            <Header>Reports</Header>
            <Row>
                <Column grow={1}>
                    <Returns />
                </Column>
            </Row>
            <Row>
                <Column grow={1}>
                    <Dividend />
                </Column>
            </Row>
        </div>
    );
};

export default ReportsContainer;
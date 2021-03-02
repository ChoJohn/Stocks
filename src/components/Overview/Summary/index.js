import React from 'react';
import TotalAssets from './TotalAssets';
import Invested from './Invested';
import Cash from './Cash';
import { Row, Column } from '../../utils/FlexBox';

const Summary = () => {
    return (
        <div>
            <Row>
                <Column width='33%'>
                    <TotalAssets />
                </Column>
                <Column width='33%'>
                    <Invested />
                </Column>
                <Column width='33%'>
                    <Cash />
                </Column>
            </Row>
        </div>
    )
};

export default Summary;
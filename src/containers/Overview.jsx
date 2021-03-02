import React from 'react';
import Summary from '../components/Overview/Summary';
import Percentage from '../components/Overview/Percentage';
import Allocations from '../components/Overview/Allocations';
import { Row, Column } from '../components/utils/FlexBox';
import { Header } from '../components/utils/Font';

const Overview = () => {
    return (
        <div className='overview-container'>
            <Header>Overview</Header>
            <Row>
                <Column grow={1}>
                    <Summary />
                </Column>
            </Row>
            <Row>
                <Column width='66%'>
                    <Percentage />
                </Column>
                <Column width='33%'>
                    <Allocations />
                </Column>
            </Row>
        </div>
    );
};

export default Overview;
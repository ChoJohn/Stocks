import React, { useContext } from 'react';
import { DataContext } from '../../../../containers/Dashboard';
import { Cell, PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import './index.css';
import '../../../utils/DarkMode/index.css';

const renderActiveShape = (props) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, total, isDarkMode } = props;
    
    return (
      <g>
        <g x={cx} y={cy} dy={8} textAnchor='middle' fill={'#4a6eb3'} fontWeight='bold'>
          <text x={cx} 
                y={cy - 25} 
                dy={8} 
                textAnchor='middle' 
                fill={isDarkMode === 'dark-mode' ? '#E8E8E8' : '#4a6eb3'} 
                fontSize='24px'
                fontWeight='bold'>
                    {payload.symbol}
          </text>
          <text x={cx} 
                y={cy + 15} 
                dy={8} 
                textAnchor='middle' 
                fill={isDarkMode === 'dark-mode' ? '#E8E8E8' : '#4a6eb3'} 
                fontWeight='bold' 
                fontSize='36px'>
                    {(payload.value / total * 100).toFixed(2)}%
          </text>
        </g>
        <Sector
            cx={cx}
            cy={cy}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            startAngle={startAngle}
            endAngle={endAngle}
            fill={fill}
        />
        <Sector
            cx={cx}
            cy={cy}
            startAngle={startAngle}
            endAngle={endAngle}
            innerRadius={outerRadius + 5}
            outerRadius={outerRadius + 15}
            fill={fill}
            stroke={'transparent'}
            strokeWidth={'5'}
        />
      </g>
    );
};
  
const PiChart = ({activeIndex, handleUpdate}) => {
    const dataContext = useContext(DataContext);

    return (
        <div className='pie-container'>
            <div className={dataContext.state.darkMode 
                            ? 'pie-chart-card dark-mode-out' 
                            : 'pie-chart-card light-mode-out'}>
            <ResponsiveContainer width='100%' >
                <PieChart width={50} height={50}>
                    <Pie
                        activeIndex={activeIndex}
                        activeShape={renderActiveShape}
                        data={dataContext.state.stocks}
                        innerRadius={88}
                        outerRadius={150}
                        fill='#cfe2fc'
                        stroke='transparent'
                        strokeWidth={'5'}
                        dataKey='value'
                        onMouseEnter={(props) => handleUpdate(props.id - 1)}
                    >
                        {
                            dataContext.state.stocks.map((entry, index) => 
                                <Cell key={index} 
                                      fill={dataContext.state.colours[index]} 
                                      isDarkMode={dataContext.state.darkMode ? 'dark-mode' : 'light-mode'}
                                      total={dataContext.state.account.totalInvestment} />
                            )
                        }
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
        </div>
    );
};
  
export default PiChart;

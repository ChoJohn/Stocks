import React, { useContext } from 'react';
import { DataContext } from '../../../../containers/Dashboard';
import { Cell, PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import './index.css';
import '../../../utils/DarkMode/index.css';

const renderActiveShape = (props) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, isDarkMode } = props;
    
    return (
        <g>
            <text x={cx} 
                  y={cy} 
                  dy={8} 
                  textAnchor='middle' 
                  fill={isDarkMode ? '#E8E8E8' : '#4a6eb3'} 
                  fontWeight='bold'
                  fontSize='24px'
            >
                {payload.investmentType}
            </text>
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
            />
        </g>
    );
};
  
const AllocationPieChart = ({activeIndex, handleUpdate}) => {
    const dataContext = useContext(DataContext);

    return (
        <div className={dataContext.state.darkMode 
                        ? 'allocations-pie-chart dark-mode-out' 
                        : 'allocations-pie-chart light-mode-out'}>
            <ResponsiveContainer width='100%'>
                <PieChart width={25} height={25}>
                    <Pie
                        activeIndex={activeIndex}
                        activeShape={renderActiveShape}
                        data={dataContext.state.account.allocations}
                        innerRadius={50}
                        outerRadius={100}
                        fill='#cfe2fc'
                        stroke='transparent'
                        strokeWidth={'5'}
                        dataKey='marketValue'
                        onMouseEnter={(props) => handleUpdate(props.id - 1)}
                    >
                        {
                            dataContext.state.account.allocations.map((entry, index) =>
                                <Cell key={index} 
                                      fill={dataContext.state.colours[index]}
                                      isDarkMode={dataContext.state.darkMode} />
                            )
                        }
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};
  
export default AllocationPieChart;

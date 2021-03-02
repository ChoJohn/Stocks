import React from 'react';
import classNames from 'classnames';
import './index.css';

export const Row = ({ children, width }) => <div className="flex" style={{ width }}>{ children }</div>;
export const Column = ({ children, grow, width }) => <div className={ classNames("column", grow ? `grow-${grow}` : null) } style={{ width }}>{ children }</div>;
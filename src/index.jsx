'use strict';

import React from 'react';
import ReactDom from 'react-dom';

import AppHeader from './components/header';
import AppContent from './components/content';
import AppFooter from './components/footer';

import './style/index.less';

// 关闭 HMR 调整 CSS，开启调整 JS
// if (module.hot) module.hot.accept();
const App = () => (
    <div className="app-wrapper">
        <AppHeader/>
        <AppContent/>
        <AppFooter/>
    </div>
);

// 最终渲染
ReactDom.render((
    <App/>
), document.getElementById('app'));

import { Spin } from 'antd';
import { dynamic } from 'dva';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import styles from './global.less';
import NotFound from './pages/404';

dynamic.setDefaultLoadingComponent(() => {
  return <Spin size="large" className={styles.globalSpin} />;
});

function RouterRedict({ history }) {
  return (
    <Switch>
      <Redirect exact from="/" to="/login" />
      <Route render={NotFound} />
    </Switch>
  );
}

export default RouterRedict;

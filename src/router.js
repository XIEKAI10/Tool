import React from 'react';
import { Spin } from 'antd';
import { dynamic } from 'dva';
import styles from './global.css';
import { Route, Redirect, Switch } from 'react-router';
import NotFound from './pages/404';
import router from 'umi/router';

dynamic.setDefaultLoadingComponent(() => {
  return <Spin size="large" className={styles.globalSpin} />;
});

function RouterRedict({ history }) {
  router.push('/login')
  return (
    <Switch>
      <Redirect exact from="/" to="/login" />
      <Route render={NotFound} />
    </Switch>
  );
}

export default RouterRedict;

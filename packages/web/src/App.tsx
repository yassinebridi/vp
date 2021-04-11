import { HomeLayout } from "@layouts";
import { HomePage, LoginPage, SettingsPage } from "@pages";
import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  RouteProps,
  Switch,
} from "react-router-dom";

export interface AppProps {}
const App: React.FC<AppProps> = () => {
  return (
    <Router>
      <Switch>
        <CustomRoute exact path="/" component={HomePage} layout={HomeLayout} />
        <CustomRoute
          exact
          path="/settings"
          component={SettingsPage}
          layout={HomeLayout}
        />
        <Route exact path="/login" component={LoginPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;

export interface RoutesProps extends RouteProps {
  layout?: React.FC<any>;
  component?: React.FC<any>;
  path: string;
}
const CustomRoute: React.FC<RoutesProps> = ({
  layout: Layout,
  component: Component,
  path,
}) => {
  return (
    <Layout>
      <Route exact path={path} component={Component} />
    </Layout>
  );
};

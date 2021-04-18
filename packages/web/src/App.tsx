import { HomeLayout } from "@layouts";
import { BrandsPage, HomePage, LoginPage, SettingsPage } from "@pages";
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
        <CustomRoute
          title="Brands | Videplacard"
          exact
          path="/brands"
          component={BrandsPage}
          layout={HomeLayout}
        />
        <CustomRoute
          title="Settings | Videplacard"
          exact
          path="/settings"
          component={SettingsPage}
          layout={HomeLayout}
        />
        <CustomRoute
          title="Home | Videplacard"
          exact
          path="/"
          component={HomePage}
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
  title?: string;
}
const CustomRoute: React.FC<RoutesProps> = ({
  layout: Layout,
  component: Component,
  path,
  title,
}) => {
  React.useEffect(() => {
    document.title = title || "Videplacard dashboard";
  }, [title]);

  return (
    <Layout>
      <Route exact path={path} component={Component} />
    </Layout>
  );
};

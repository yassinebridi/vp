import { HomeLayout } from "@layouts";
import { BrandsPage, HomePage, LoginPage, SettingsPage } from "@pages";
import { TableProvider } from "@utils";
import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  RouteProps,
  Switch,
} from "react-router-dom";
import { QueryParamProvider } from "use-query-params";

export interface AppProps {}
const App: React.FC<AppProps> = () => {
  return (
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <Switch>
          <CustomRoute
            title="Brands | Videplacard"
            exact
            path="/brands"
            isTable={true}
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
      </QueryParamProvider>
    </Router>
  );
};

export default App;

export interface RoutesProps extends RouteProps {
  layout?: React.FC<any>;
  component?: React.FC<any>;
  path: string;
  title?: string;
  isTable?: boolean;
}
const CustomRoute: React.FC<RoutesProps> = ({
  layout: Layout,
  component: Component,
  path,
  title,
  isTable,
}) => {
  React.useEffect(() => {
    document.title = title || "Videplacard dashboard";
  }, [title]);

  return (
    <Layout>
      {isTable ? (
        <TableProvider>
          <Route exact path={path} component={Component} />
        </TableProvider>
      ) : (
        <Route exact path={path} component={Component} />
      )}
    </Layout>
  );
};

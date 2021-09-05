import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";
import { App } from "../App";

export const Router: VFC = memo(() => {
  return (
    //Routingの分岐
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route
        path="/"
        render={({ match: { url } }) => (
          <Switch>
            {homeRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              ></Route>
            ))}
          </Switch>
        )}
      />
    </Switch>
  );
});

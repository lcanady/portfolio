import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./pages/404";
import Home from "./pages/Home";

export function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </AnimatePresence>
  );
}

import { AnimatePresence } from "framer-motion";
import { useLocation, Route, Switch } from "react-router-dom";
import ContextProvider from "./components/ContextProvider";
import { Layout } from "./components/Layout";
import NotFound from "./pages/404";
import Home from "./pages/Home";

export function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <ContextProvider>
        <Layout>
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact component={Home} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Layout>
      </ContextProvider>
    </AnimatePresence>
  );
}

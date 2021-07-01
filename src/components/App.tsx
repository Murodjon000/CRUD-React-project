import React, { FC } from "react";
import { Router, RouteComponentProps } from "@reach/router";
import Home from "./Home";
import Details from "../containers/DetailsContainer";
import Header from "./Header";

const App: FC<any> = () => (
  <div>
    <Header />
    <Router>
      <RouterPage path="/" pageComponent={<Home />} />
      <Details path="/project/:id" />
    </Router>
  </div>
);
const RouterPage = (props: { pageComponent: any } & RouteComponentProps) =>
  props.pageComponent;

export default App;

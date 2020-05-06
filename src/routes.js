import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import App from "./App.js";
import { SingleMovie } from "./components";
import { fetcMovies } from "./store/movies";
import { me } from "./store";
class Routes extends Component {
  componentDidMount() {
    this.props.data();
  }
  render() {
    return (
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/movie/:id" component={withRouter(SingleMovie)} />
      </div>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
    data: () => dispatch(fetcMovies()),
  };
};

export default withRouter(connect(null, mapDispatch)(Routes));

Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
};

import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export default function withAuth(WrappedComponent, allowedRoles) {
  class AuthorizedContainer extends React.Component {
    render() {
      const user = this.props.session.user;
      if (!user) {
        return <Redirect to="/login" />;
      } else {
        const isAllowed = allowedRoles.indexOf(user.role) > -1;
        return isAllowed ? (
          <WrappedComponent {...this.props} />
        ) : (
          <Redirect to="/" />
        );
      }
    }
  }

  const mapStateToProps = (state) => ({
    session: state.session,
  });
  return connect(mapStateToProps)(AuthorizedContainer);
}

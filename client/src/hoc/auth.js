import React from 'react';  
import { connect } from 'react-redux';  


export default function (ComposedComponent) {  
  class Authenticate extends React.Component {
    componentDidMount() {
      this._checkAndRedirect();
    }

    componentDidUpdate() {
      this._checkAndRedirect();
    }

    _checkAndRedirect() {
        const authToken=localStorage.getItem("token")
      if (!authToken) {
       this.props.history.push("/login")
      }
     
    }

    render() {

      return (
        <div>
          { <ComposedComponent {...this.props} />  }
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
    isAuth:state.isAuth.auth
    };
  };
  // videos:videoReducer
  


  return connect(
    mapStateToProps
  )(Authenticate);
}
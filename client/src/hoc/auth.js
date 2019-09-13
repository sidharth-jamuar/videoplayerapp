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
      const {isAuth} = this.props;
        const authToken=localStorage.getItem("token")
      if (!authToken) {
       this.props.history.push("/login")
      }
     
    }

    render() {
        console.log(this.props.history)
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
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
       
      if (!isAuth) {
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
    isAuth:state.isAuth
    };
  };
  


  return connect(
    mapStateToProps
  )(Authenticate);
}
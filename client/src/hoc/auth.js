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
      const {username} = this.props;
       
      if (!username) {
       this.props.history.push("/login")
      }
    }

    render() {
        console.log(this.props.history)
      return (
        <div>
          { this.props.username ? <ComposedComponent {...this.props} /> : null }
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      username: state.socket.username
    };
  };
  


  return connect(
    mapStateToProps
  )(Authenticate);
}
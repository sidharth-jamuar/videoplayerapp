import React from "react"

export default function(ComposedComponent){
    class IsMobile extends React.Component{
         constructor(props){
             super(props);
             this.state={
                 isMobile:window.innerWidth<=748?true:false
                
             }
         }
         componentDidMount(){
             window.onresize=()=>{
                 if(window.innerWidth <=748){
                     this.setState({isMobile:true})
                 }
                 else{
                     this.setState({isMobile:false})
                 }
             }
         }
         render(){
             return(
                 <ComposedComponent {...this.props} isMobile={this.state.isMobile} />
             )
         }
    }
    return IsMobile;
}

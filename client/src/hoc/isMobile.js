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


// export const isMobile=()=>{
//    if(window.innerWidth<=748){
//        console.log("less than")
//        return true
//    }
//    else{
//        console.log("greater than")
//        return false
//    }
// }
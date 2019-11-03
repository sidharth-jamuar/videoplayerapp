import React,{lazy,Suspense} from "react"
import spinner from "../css/gifs/spinner.gif"
import "../css/spinner.css"
const Login =lazy(()=>import("../components/Login")) 
const Profile =lazy(()=>import("../components/Profile")) 
const VideoList=lazy(()=>import("../components/VideoList"))
const VideoPlayer=lazy(()=>import("../components/VideoPlayer")) ;
const  Homepage=lazy(()=>import( "../components/Homepage"))

export const renderLogin=(props)=>{
    return(
        <Suspense fallback={<div className="loader loader-search"    ><img src={spinner} /></div>}>
            <Login {...props} />
        </Suspense>
    )
}
export const renderHomepage=(props)=>{
    return(
        <Suspense fallback={<div className="loader loader-search"><img src={spinner} /></div>}>
            <Homepage {...props} />
        </Suspense>
    )
}
export const renderVideoList=(props)=>{
    return(
        <Suspense fallback={<div className="loader loader-search"><img src={spinner} /></div>}>
            <VideoList {...props} />
        </Suspense>
    )
}
export const renderProfile=(props)=>{
    return(
        <Suspense fallback={<div className="loader loader search"><img src={spinner} /></div>}>
            <Profile {...props} />
        </Suspense>
    )
}
export const renderVideoPlayer=(props)=>{
    return(
        <Suspense fallback={<div className="loader loader-search"><img src={spinner} /></div>}>
            <VideoPlayer {...props} />
        </Suspense>
    )
}
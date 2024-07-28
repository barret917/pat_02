import React from "react";
import Lottie from "lottie-react"
import animationData from "./animation/Animation - 1722158006955.json"

export default function LottieAnimation(){
    return(
        <div style={{ width: '70%', height: '70%' }}>
        <Lottie animationData={animationData} loop={true} autoplay={true} />
        <button></button>
      </div>
    )
}
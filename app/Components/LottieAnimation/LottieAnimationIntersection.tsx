import React, {useRef} from 'react'
import { useInView } from 'react-intersection-observer';
import Lottie from 'lottie-react';
interface AnimationProps {
    animationData:any
    animationClassName?:string
}
const LottieAnimationIntersection = ({animationData, animationClassName}:AnimationProps) => {
  //OPTIMIZED LOTTIE ANIMATION COMPONENT
  // -- using intersection observer API in order to check if animation is visible
  // if visible then play animation, if not then stop. It allow to make big jump in performence
    const lottieRef = useRef();    
    const { ref, inView } = useInView({
      /* Optional options */
      threshold: 0.5,
      onChange: (inView) => inView ? lottieRef.current.play() : lottieRef.current.pause()
    });
  
  return <div ref={ref} ><Lottie lottieRef={lottieRef} width={300} className={animationClassName} animationData={animationData} loop={true}/></div>
}

export default LottieAnimationIntersection

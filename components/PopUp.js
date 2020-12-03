import  { motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import {useEffect} from 'react';

const PopUp = ({delay = 0, children}) => {
  const {ref, inView, entry} = useInView({threshold: .5})
  const controls = useAnimation();
  
  useEffect(()=> {
    if(inView){
      controls.start({
        y: 0,
        opacity: 1
      })
    }
  }, [inView])

  return (
    <motion.div 
      ref={ref}
      initial={{
        y: 30,
        opacity: 0
      }}
      animate={controls}
      transition={{
        duration: .7,
        delay
    }}>
      {children}
    </motion.div>
  )
}

export default PopUp;
import React from 'react';
import { motion } from 'framer-motion';
import { useTypewriter } from 'react-simple-typewriter'

import { images } from '../../constants';
import './Header.scss';

import './Header.scss';

import { AppWrap } from '../../wrapper';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}



const Header = () => {

  const [text, count] = useTypewriter ({
    words: [
      "Hi!, My name is Jay Wu",
      "Java Full Stack Developer", 
      "Backend Developer", 
      "Frontend Developer",
      "React Developer",
      "Vue Developer"
    ],
    loop: true,
    delaySpeed: 2000
  })

  return (
    <div className="app__header app__flex">

      <motion.div
        whileInView={{ opacity: [0, 1], scale:[0, 1] }}               
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img">
          
          <motion.div 
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__header-info"
          >
          
           
          <div className="app__header-badge">
            <motion.div             
            whileInView={{ scale: [0, 1.5, 0.65, 1] }}
            transition={{ duration: 2, ease: 'easeInOut' }} 
            className="badge-cmp app__flex">
              <motion.div
                className="box"
                animate={{
                  scale: [0.4, 0.8 , 0.8, 0.4, 0.8],
                  rotate: [0, 0, 180, 180, 0],
                  borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              />  
              <div>
                <motion.h2               
                whileInView={{ opacity: [0, 1], scale:[0, 1] }}
                transition={{ duration: 1, delayChildren: 0.5 }}
                
                >SOFTWARE ENGINEER</motion.h2>                
              </div>
            </motion.div>            
          
            <motion.h1               
            whileInView={{ opacity: [0, 1], scale:[0, 1] }}
            transition={{ duration: 1, delayChildren: 0.5 }}
            >"{text}"</motion.h1>
              
            
          </div>
          </motion.div>

          
          <motion.img
            whileInView={{ scale: [0, 1.5, 0.65, 0.8, 0.75] }}
            transition={{ duration: 2, ease: 'easeInOut' }}                               
            src={images.circle}
            alt="profile-circle"
            className="overlay_circle"
          />          
      </motion.div>

    </div>
  )
}

export default AppWrap(Header, 'home');
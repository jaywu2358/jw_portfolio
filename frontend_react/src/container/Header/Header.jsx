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
      "Java Full Stack", 
      "Backend", 
      "Frontend ",
      "React",
      "Vue"
    ],
    loop: true,
    delaySpeed: 2000
  })

  return (
    <div className="app__header app__flex">
      <motion.div 
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
      >
       <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20}}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Jay</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          
          <motion.h2 
          whileInView={{ opacity: [0, 1], scale:[0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          >{text} developer</motion.h2>
          
        </div>
       </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1], scale:[0, 1] }}               
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img">
          <img src={images.profile} alt="profile_bg" />
          <motion.img
            whileInView={{ scale: [0, 1.25] }}
            transition={{ duration: 1, ease: 'easeInOut' }}          
            src={images.circle}
            alt="profile-circle"
            className="overlay_circle"
          />          
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
        >
          {[images.postgresql, images.java, images.spring, images.rest, images.react ].map((circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="circle" />
            </div>

          ))}
        
      </motion.div>

    </div>
  )
}

export default AppWrap(Header, 'home');
import { motion } from 'framer-motion'
import React from 'react'

function Bottom_up(props) {
  return (
    <motion.div
    className={props.class}
    
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    
    transition={{ duration: 0.5, delay: props.delay }}
    variants={{
      visible: { opacity: 1, translateY: "0%" },
      hidden: { opacity: 0, translateY: "50%" },
    }}>{props.child}</motion.div>
  )
}

export default Bottom_up

import { Routes, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion";


function Animated() {


  const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        location={location}
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit= { {opacity: 0}}
        variants={{
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          
          transition: {duration: 3, type: "spring", stiffness: 50}
        }}
      >
        <Routes location={location} key={location.pathname} />
      </motion.div>
    </AnimatePresence>
  );
}

export default Animated;
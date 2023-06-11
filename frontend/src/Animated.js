
import { Routes, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion";


function Animated() {


  const location = useLocation()

  return (
    <AnimatePresence>
      <motion.div
        location={location}
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={{
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: {duration: 3, type: "spring", stiffness: 50}
        }}
      >
        <Routes location={location} key={location.pathname} />
      </motion.div>
    </AnimatePresence>
  );
}

export default Animated;
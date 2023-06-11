
import EventForm from "../components/EventForm"
import { motion } from "framer-motion";

const NewEventPage = () => {
    return (
        <motion.div 
        initial={{y: "100vw"}}
        animate={{y: 0}}
        transition={{duration: 1}}
        >
            <EventForm method="post" />
        </motion.div>
    )
}

export default NewEventPage;

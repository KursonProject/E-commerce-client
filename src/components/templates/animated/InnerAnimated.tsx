import { motion } from "framer-motion"

const InnerAnimation = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { duration: 0.2, ease: "easeInOut", type: "tween", delay: 0.2 }
            }}
            exit={{
                opacity: 0,
                transition: { duration: 0.2, ease: "easeInOut", type: "tween", delay: 0.2 }
            }}
            className={`w-full h-full ${className || ""}`}
        >
            {children}
        </motion.main>
    )
}

export default InnerAnimation
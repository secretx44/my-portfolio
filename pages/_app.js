import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <ThemeProvider defaultTheme="light" attribute="class">
        <motion.div
          key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={{
          pageInitial: {
            opacity: 0,
            y: -50,
          },
          pageAnimate: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
            },
          },
          pageExit: {
            opacity: 0,
            y: 50,
            transition: {
              duration: 0.5,
            },
          },
        }}>
          <Component {...pageProps} />
          </motion.div>
    </ThemeProvider>
    </AnimatePresence>
    
  );
}

export default MyApp;

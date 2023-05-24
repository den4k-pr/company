import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { FC, PropsWithChildren } from 'react';

const PageTransition: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();

  return (
    <AnimatePresence exitBeforeEnter={false} >
      <motion.div
        key={router.route}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;


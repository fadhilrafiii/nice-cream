'use client';

import { PropsWithChildren, useEffect, useState } from 'react';

import { AnimatePresence, motion } from 'motion/react';

type AlertProps = {
  autoShow?: boolean;
  wait?: number;
} & PropsWithChildren;

const Alert = ({ autoShow = true, wait = 1000, children }: AlertProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!autoShow) return;

    const timeout = setTimeout(() => {
      setIsOpen(true);
    }, wait);

    return () => clearTimeout(timeout);
  }, [autoShow, wait]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed right-4 bottom-4 z-20 flex w-4/5 max-w-[300px] items-start justify-between gap-6 rounded-md bg-primary p-4 drop-shadow-sm xl:hidden"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{
            duration: 0.4,
            scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
          }}
        >
          {children}
          <span
            className="flex h-6 min-w-6 cursor-pointer items-center justify-center rounded-full pt-[2px] text-xl text-white hover:bg-secondary"
            role="button"
            aria-label="close"
            onClick={() => setIsOpen(false)}
          >
            &#215;
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Alert;

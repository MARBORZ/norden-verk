import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

type State = 'default' | 'hover' | 'click';

export const CustomCursor = () => {
  const [state, setState] = useState<State>('default');
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const stateRef = useRef(state);
  stateRef.current = state;

  useEffect(() => {
    // Только отслеживание — без spring, без физики
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const onDown = () => setState('click');
    const onUp = () => setState(stateRef.current === 'click' ? 'default' : stateRef.current);
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const onEnterEl = () => setState('hover');
    const onLeaveEl = () => setState('default');

    const bindInteractive = () => {
      document.querySelectorAll<HTMLElement>('a, button').forEach((el) => {
        el.addEventListener('mouseenter', onEnterEl);
        el.addEventListener('mouseleave', onLeaveEl);
      });
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.documentElement.addEventListener('mouseenter', onEnter);

    const t = setTimeout(bindInteractive, 500);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.documentElement.removeEventListener('mouseenter', onEnter);
      clearTimeout(t);
    };
  }, [x, y]);

  return (
    <>
      <style>{`* { cursor: none !important; }`}</style>

      <motion.div
        data-custom-cursor
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
          zIndex: 9999,
          pointerEvents: 'none',
          fontSize: 32,
          lineHeight: 1,
          opacity: visible ? 1 : 0,
        }}
        animate={{
          rotate: state === 'click' ? -45 : state === 'hover' ? -15 : 0,
          scale: state === 'click' ? 0.8 : state === 'hover' ? 1.2 : 1,
        }}
        transition={{ duration: 0.15 }}
      >
        🔨
      </motion.div>
    </>
  );
};

// Shared Framer Motion variants & easing curves.

export const easePremium = [0.22, 1, 0.36, 1];
export const easeSpring = { type: "spring", stiffness: 120, damping: 18, mass: 0.6 };

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easePremium },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: easePremium } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: easePremium } },
};

export const blurReveal = {
  hidden: { opacity: 0, y: 24, scale: 0.985 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: easePremium },
  },
};

export const staggerContainer = (stagger = 0.08, delay = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

export const viewportOnce = { once: true, amount: 0.25 };

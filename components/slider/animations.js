export const leftBtnVariants = {
  startpoint: { opacity: 0, x: 40 },
  endpoint: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: { scale: 0 },
};

export const rightBtnVariants = {
  startpoint: { opacity: 0, x: -40 },
  endpoint: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: { scale: 0 },
};

export const imageVariants = {
  startpoint: { opacity: 0 },
  endpoint: {
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.2,
    },
  },
};

export const directions = [
  {
    startpoint: {
      y: -50,
      opacity: 0,
    },
    endpoint: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  },
  {
    startpoint: {
      x: -50,
      opacity: 0,
    },
    endpoint: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  },
  {
    startpoint: {
      y: 50,
      opacity: 0,
    },
    endpoint: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  },
  {
    startpoint: {
      x: 50,
      y: 50,
      opacity: 0,
    },
    endpoint: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  },
  {
    startpoint: {
      x: 50,
      y: -50,
      opacity: 0,
    },
    endpoint: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  },
  {
    startpoint: {
      x: -50,
      y: -50,
      opacity: 0,
    },
    endpoint: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  },
];
export const promoButton = {
  startpoint: {
    opacity: 0,
  },
  endpoint: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.6,
    },
  },
};
export const promoFromTop = {
  startpoint: {
    opacity: 0,
  },
  endpoint: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      staggerDirection: -1,
      duration: 0.1,
    },
  },
};

export const bgVariants = {
  startpoint: {
    opacity: 0,
  },
  endpoint: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

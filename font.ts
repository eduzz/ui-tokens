export const font = {
  size: {
    /** 12px */
    xxxs: '0.8rem',
    /** 14px */
    xxs: '0.9rem',
    /** 16px */
    xs: '1rem',
    /** 20px */
    sm: '1.3rem',
    /** 24px */
    md: '1.5rem',
    /** 32px */
    lg: '2rem',
    /** 40px */
    xl: '2.5rem'
  },
  family: {
    base: 'Roboto, "Helvetica Neue", Arial, sans-serif'
  },
  weight: {
    regular: 400,
    semibold: 600,
    bold: 700
  },
  lineHeight: {
    default: '100%',
    xs: '115%',
    sm: '120%',
    md: '133%',
    lg: '150%',
    xl: '170%'
  }
} as const;

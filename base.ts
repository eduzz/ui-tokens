export const base = {
  light: {
    surface: {
      subtle: '#fcfcfc',
      default: '#ffffff',
      disabled: '#bfbfbf'
    },
    outline: {
      default: '#e4e4e7',
      disabled: '#d9d9d9',
      darker: '#050505'
    },
    content: {
      title: '#000000',
      body: '#3f3f46',
      subtitle: '#6b7280',
      caption: '#71717a',
      negative: '#ffffff',
      disabled: '#a1a1aa'
    }
  },
  dark: {
    surface: {
      subtle: '#1F1F1F',
      default: '#141414',
      disabled: '#434343'
    },
    outline: {
      default: '#e4e4e7',
      disabled: '#d9d9d9',
      darker: '#050505'
    },
    content: {
      title: '#FFFFFF',
      body: '#FAFAFA',
      subtitle: '#F0F0F0',
      caption: '#F0F0F0',
      negative: '#000000',
      disabled: '#434343'
    }
  }
} as const;

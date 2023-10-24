import { tss } from '@theme';

export const useStylesComponent = tss
  .withParams<{ color: 'red' | 'blue' }>()
  .create(({ lightTheme, color }) => ({
    root: {
      cursor: 'pointer',
      // The color of the text is red or blue depending on the state of the component
      color,
      // When mouse is hover, green border
      '&:hover': {
        border: `4px solid ${lightTheme.primaryColor}`,
      },
      // On big screen, a big black border
      '@media (min-width:48em)': {
        border: '10px solid black',
      },
    },
    cosas: {
      backgroundColor: 'red',
    },
  }));

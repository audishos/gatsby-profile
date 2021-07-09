import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

const theme = {
  colors: {
    primary: {
      100: '#e2d5e9',
      200: '#c6acd3',
      300: '#aa82bd',
      400: '#8e59a7',
      500: '#723092',
      600: '#5b2674',
      700: '#441c57',
      800: '#2d133a',
      900: '#16091d',
    },
    secondary: {
      100: '#f9f7d7',
      200: '#f3f0af',
      300: '#ede887',
      400: '#e7e15e',
      500: '#e1da37',
      600: '#b4ae2c',
      700: '#878221',
      800: '#5a5716',
      900: '#2d2b0b',
    },
    tertiary: {
      100: '#e7f6f1',
      200: '#cfede4',
      300: '#b7e4d7',
      400: '#9fdbca',
      500: '#87d2bd',
      600: '#6ca897',
      700: '#517e71',
      800: '#36544b',
      900: '#1b2a25',
    },
    success: {
      100: '#d5e4d2',
      200: '#accaa6',
      300: '#83af7a',
      400: '#5a954e',
      500: '#317B22',
      600: '#27621b',
      700: '#1d4914',
      800: '#13310d',
      900: '#091806',
    },
    error: {
      100: '#fcdddd',
      200: '#f9bbbb',
      300: '#f79a9a',
      400: '#f47878',
      500: '#F25757',
      600: '#c14545',
      700: '#913434',
      800: '#602222',
      900: '#301111',
    },
  },
};

export default extendTheme(
  theme,
  withDefaultColorScheme({ colorScheme: 'primary' }),
);

import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Header from '../src/tsx/container/Header';
import Footer from '../src/tsx/container/Footer';

storiesOf('Base', module)
  .add('Header', () =>
    <Header />
  )
  .add('Footer', () =>
    <Footer />
  );
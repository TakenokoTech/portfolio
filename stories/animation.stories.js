import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Animation from '../src/tsx/components/Animation';

storiesOf('Animation', module)
  .add('default', () =>
    <div style={{height: 600}}>
      <Animation />
    </div>
  )
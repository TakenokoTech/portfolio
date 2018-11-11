import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Animation from '../src/tsx/components/Animation';
import Scene1 from '../src/tsx/animation/Scene1';

storiesOf('Animation', module)
  .add('default', () =>
    <div style={{height: 600}}>
      <Animation />
    </div>
  )
  .add('Scene1', () =>
  <div>
    <Scene1 />
  </div>
)
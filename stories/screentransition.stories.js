import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import ScreenTransition from '../src/tsx/components/ScreenTransition';

const divStyle =  {
  display: "flex", position: "absolute",
  top: 0,
  left: 0,
}

storiesOf('ScreenTransition', module)
  .add('default', () => {
    return (
      <>
        <ScreenTransition active={true} />
      </>
    )
  }
  )
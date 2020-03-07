import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from '../src/tsx/components/Button';

storiesOf('Button', module)
  .add('default', () =>
    <>
      <Button />
      <span style={{ padding: 4 }} />
      <Button className="button" />
      <span style={{ padding: 4 }} />
      <Button className="button_reverse" />
    </>
  )
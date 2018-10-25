import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import AboutMe from '../src/tsx/container/AboutMe';
import SkillSet from '../src/tsx/container/SkillSet';
import Product from '../src/tsx/container/Product';
import Career from '../src/tsx/container/Career';
import Contact from '../src/tsx/container/Contact';

storiesOf('Section', module)
    .add('AboutMe', () =>
        <AboutMe />
    )
    .add('SkillSet', () =>
        <SkillSet />
    )
    .add('Product', () =>
        <Product />
    )
    .add('Career', () =>
        <Career />
    )
    .add('Contact', () =>
        <Contact />
    );
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Button, Welcome } from '@storybook/react/demo';

import Home from "./home";
import SSZ from "./ssz"

storiesOf('Welcome', module)
  .add('Home', () => <Home.Home />);

storiesOf('SSZ-JS', module)
  .add('Intro', () => <SSZ.Home />)
  .add('Buffer', () => <SSZ.Buffer />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

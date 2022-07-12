import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Alert, VStack } from 'native-base';

import CenterView from '../CenterView';

storiesOf('Alert', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Overview, Variants', () => {
    return (
      <VStack space="2">
        <Alert variant="info">General Message</Alert>
        <Alert variant="success">Success Message</Alert>
        <Alert variant="error">Error Message</Alert>
      </VStack>
    );
  });

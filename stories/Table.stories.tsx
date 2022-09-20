import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import { Table as TableNRC } from '../src/components';

const defaultData = [
  {
    firstNameSDLKFJ: 'tanner',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    info: 'Lorem ipsum',
    progress: 50,
  },
  {
    firstNameSDLKFJ: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    progress: 80,
  },
  {
    firstNameSDLKFJ: 'joe',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    info: 'Lorem ipsum',
    progress: 10,
  },
];

const argTypes = {
  data: {
    control: { type: 'object' },
    defaultValue: defaultData,
  },
};

const TableMeta: ComponentMeta<typeof TableNRC> = {
  title: 'Components/Table',
  component: TableNRC,
  argTypes,
};

export default TableMeta;

const Template: ComponentStory<typeof TableNRC> = ({ data }) => (
  <TableNRC data={data} onItemClick={(item) => console.log(item)} />
);

export const Table = Template.bind({});

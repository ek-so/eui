/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import type { Meta, StoryObj } from '@storybook/react';

import { EuiFieldNumber, EuiFieldNumberProps } from './field_number';

const meta: Meta<EuiFieldNumberProps> = {
  title: 'Forms/EuiFieldNumber',
  component: EuiFieldNumber,
  argTypes: {
    step: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<EuiFieldNumberProps>;

export const Playground: Story = {};

export const ControlledComponent: Story = {
  args: {
    value: 0,
  },
  argTypes: {
    value: { control: 'number' },
    onChange: () => {},
  },
};

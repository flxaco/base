import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Primary, Secondary, Large, Small, ExtraSmall } from './Button.stories';

test('Renders the Primary button', () => {
  const { getByTestId } = render(<Primary label="Primary Text" data-testid="primary-test" />);
  const title = getByTestId('primary-test');
  expect(title).toBeInTheDocument();
});

test('Renders the Secondary button', () => {
  const { getByTestId } = render(<Secondary label="Secondary Text" data-testid="secondary-test" />);
  const title = getByTestId('secondary-test');
  expect(title).toBeInTheDocument();
});

test('Renders the Large button', () => {
  const { getByTestId } = render(<Large label="Large Text" data-testid="large-test" />);
  const title = getByTestId('large-test');
  expect(title).toBeInTheDocument();
});

test('Renders the Small button', () => {
  const { getByTestId } = render(<Small label="Small Text" data-testid="small-test" />);
  const title = getByTestId('small-test');
  expect(title).toBeInTheDocument();
});

test('Renders the Extra Small button', () => {
  const { getByTestId } = render(<ExtraSmall label="Extra Small Text" data-testid="extra-small-test" />);
  const title = getByTestId('extra-small-test');
  expect(title).toBeInTheDocument();
});

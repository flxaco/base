import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Default } from './Card.stories';

test('Renders the Default Card', () => {
  const { getByTestId } = render(<Default />);
  const title = getByTestId('card-test');
  expect(title).toBeInTheDocument();
});

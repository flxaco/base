import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Default } from './Footer.stories';

test('Renders the Footer', () => {
  const { getByTestId } = render(<Default />);
  const footer = getByTestId('footer-test');
  expect(footer).toBeInTheDocument();
});

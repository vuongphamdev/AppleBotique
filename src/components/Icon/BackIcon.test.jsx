import { render } from '@testing-library/react';
import BackIcon from './BackIcon';

const renderComponent = () => {
  render(<BackIcon />);
};

it('can render component', () => {
  renderComponent();
});

import { render } from '@testing-library/react';
import BackIcon from './BackIcon';

const renderComponent = () => {
  return render(<BackIcon />);
};

it('can render component', () => {
  renderComponent();
});

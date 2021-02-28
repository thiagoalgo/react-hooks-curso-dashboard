import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

it('deve renderizar o componente sem erros', () => {
  render(<Dashboard />);
  const linkElement = screen.getByText(/Dashboard/i);
  expect(linkElement).toBeInTheDocument();
});

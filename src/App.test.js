import { render, screen } from '@testing-library/react';
import RoombaApp from './RoombaApp';

test('renders learn react link', () => {
  render(<RoombaApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

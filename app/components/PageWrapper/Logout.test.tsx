import { render, screen, fireEvent } from '@testing-library/react';
import Logout from './Logout';
import { test, expect, vi } from 'vitest';

test('renders Logout component', () => {
  render(<Logout />);
  const logoutElement = screen.getByText(/Logout/i);
  expect(logoutElement).toBeInTheDocument();
});

test('calls handleLogout function on click', () => {
  const mockRemoveCookie = vi.fn();
  const mockPush = vi.fn();
  
  vi.mock('@hooks/all', () => ({
    useCookie: () => ({
      removeCookie: mockRemoveCookie,
    }),
  }));
  
  vi.mock('next/navigation', () => ({
    useRouter: () => ({
      push: mockPush,
    }),
  }));

  render(<Logout />);
  const logoutElement = screen.getByText(/Logout/i);
  fireEvent.click(logoutElement);

  expect(mockRemoveCookie).toHaveBeenCalledWith({
    name: 'user_token',
    domain: window.location.hostname,
  });
  expect(mockPush).toHaveBeenCalledWith('/');
});
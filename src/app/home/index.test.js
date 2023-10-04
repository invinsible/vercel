import { render, screen } from '@testing-library/react'
import Home from './page'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
 
// describe('Home', () => {
//   it('renders a heading', () => {
//     render(<Home />)
 
//     const heading = screen.getByRole('heading', {
//       name: 'ququ',
//     })
 
//     expect(heading).toBeInTheDocument()
//   })
// })

it('has btn and no text', () => {
  render(<Home />);
  expect(screen.getByTestId('btn')).toBeInTheDocument();
  expect(screen.queryByTestId('text')).not.toBeInTheDocument();
});

it('show text after btn click', async () => {
  render(<Home />);
  await userEvent.click(screen.getByTestId('btn'))
  expect(screen.queryByTestId('text')).toBeInTheDocument();
})
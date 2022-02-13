import {render,screen,cleanup,fireEvent} from '@testing-library/react' 
import Main from '../Main'
afterEach(cleanup);

test('should render main component and testing working form',()=>{
  // expect(true).toBe(true);
  render(<Main/>);
  const element1 = screen.getByLabelText('Name') as HTMLInputElement; 
  // const element2 = screen.getByLabelText('Email'); 
  expect(element1).toBeInTheDocument();
  // expect(element2).toBeInTheDocument();
  expect(element1.value).toBe("");
  // expect(element2.value).toBe("");
  fireEvent.change(element1, { target: { value: "testName" }});
  expect(element1.value).toBe("testName");

})

it("should save credentials in the list", () => {
  render(<Main />);
  const element1 = screen.getByLabelText('Name'); 
  const element2 = screen.getByLabelText('Email'); 
  fireEvent.change(element1, { target: { value: "testName" }});
  fireEvent.change(element2, { target: { value: "test@gmail.com" }});
  const btnSubmit = screen.getByTestId('form');
  fireEvent.submit(btnSubmit);
  expect(screen.getByTestId('list')).toBeInTheDocument();
});
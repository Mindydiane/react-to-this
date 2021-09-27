// __tests__/Portfolio.test.js
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Portfolio from '..'
const tutorial = { name: "tutorial", description: "Regular expressions tutorial"};

afterEach(cleanup)

describe('Portfolio component' () => {

    it('renders', () => {
        render(<Portfolio currentCategory={tutorial} />);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Portfolio currentCategory={tutorial} />)
        expect(asFragment()).toMatchSnapshot()
    })
});

it('displays text' ()=> {
    const { getByTestId } = render(<Portfolio currentCategory={tutorial} />)
    expect(getByTestId('h1tag')).toHaveTextContent('Tutorials')
})
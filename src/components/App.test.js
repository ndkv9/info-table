import React from 'react'
import { shallow } from 'enzyme'
import { App } from './App'
import { DataProvider } from '../context/DataContext'

describe('<App />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <DataProvider>
        <App />
      </DataProvider>,
    )
  })

  describe('render()', () => {
    it('renders the Box', () => {
      expect(
        wrapper.children().find({ 'data-testid': 'app-box' }),
      ).toHaveLength(1)
    })
  })
})

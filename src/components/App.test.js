import React from 'react'
import { shallow } from 'enzyme'
import { App } from './App'
import { DataProvider } from '../context/DataContext'

describe('<App />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <DataProvider>
        <App data-testid='app' />
      </DataProvider>,
    )
  })

  describe('render()', () => {
    it('renders the App', () => {
      expect(wrapper.children().find({ 'data-testid': 'app' })).toHaveLength(1)
    })
  })
})

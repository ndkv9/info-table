import React from 'react'
import { shallow } from 'enzyme'
import LoadingCircular from './LoadingCircular'

describe('<LoadingCircular />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<LoadingCircular />)
  })

  describe('render()', () => {
    it('renders the component', () => {
      expect(wrapper.find({ 'data-testid': 'loading-circular' })).toHaveLength(
        1,
      )
    })
  })
})

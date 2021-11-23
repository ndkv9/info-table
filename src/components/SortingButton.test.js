import React from 'react'
import { shallow } from 'enzyme'
import SortingButton from './SortingButton'

describe('<SortingButton />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<SortingButton />)
  })

  describe('it should', () => {
    it('render the component', () => {
      expect(wrapper.find({ 'data-testid': 'sorting-btn' })).toHaveLength(1)
    })
  })
})

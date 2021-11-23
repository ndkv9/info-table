import React from 'react'
import { shallow } from 'enzyme'
import SortingButton from './SortingButton'

describe('<SortingButton />', () => {
  let wrapper
  const mockHandler = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<SortingButton isDESC={true} setIsDESC={mockHandler} />)
  })

  describe('render()', () => {
    it('renders the component', () => {
      expect(wrapper.find({ 'data-testid': 'sorting-btn' })).toHaveLength(1)
    })

    it('calls the handler when button is clicked', () => {
      wrapper.find({ 'data-testid': 'sorting-btn' }).simulate('click')
      expect(mockHandler).toHaveBeenCalled()
    })
  })
})

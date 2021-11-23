import React from 'react'
import { shallow } from 'enzyme'
import InforTable from './InfoTable'

describe('<InfoTable />', () => {
  let wrapper
  const mockFetchData = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<InforTable getData={mockFetchData} />)
  })

  describe('it should', () => {
    it('render the table component', () => {
      expect(wrapper.find({ 'data-testid': 'info-table' })).toHaveLength(1)
    })

    it('can display loading button', () => {
      expect(wrapper.find({ 'data-testid': 'loading-btn' })).toHaveLength(1)
    })

    it('loading data when button is clicked', () => {
      wrapper.find({ 'data-testid': 'loading-btn' }).simulate('click')
      expect(mockFetchData).toHaveBeenCalled()
    })
  })
})

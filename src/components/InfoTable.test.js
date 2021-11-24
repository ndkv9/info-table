import React from 'react'
import { shallow } from 'enzyme'
import InforTable from './InfoTable'
import { mockData } from '../mock/mockData'

describe('<InfoTable />', () => {
  let wrapper
  const mockFetch = jest.fn()
  const mockToggle = jest.fn()

  beforeEach(() => {
    wrapper = shallow(
      <InforTable
        name='Projects'
        api={mockData}
        fetchData={mockFetch}
        toggleSort={mockToggle}
      />,
    )
  })

  describe('render()', () => {
    it('renders the table component', () => {
      expect(wrapper.find({ 'data-testid': 'info-table' })).toHaveLength(1)
    })

    it('displays the proper title', () => {
      expect(wrapper.find({ 'data-testid': 'table-title' }).text()).toBe(
        'Projects History',
      )
    })

    it('loads data when button is clicked', () => {
      wrapper.find({ 'data-testid': 'loading-btn' }).simulate('click')
      expect(mockFetch).toHaveBeenCalled()
    })
  })
})

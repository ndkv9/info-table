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

  // In this test suite I will forcus on the Table component itself with basic tests
  // More about handling with data, on loading, error or sorting will be implemented in e2e tests
  // The e2e tests can be found in /cypress/interation/e2e.cypress.js
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

    it('except Date column, cannot implement sorting on other columns', () => {
      wrapper.find({ 'data-testid': 'id-field' }).simulate('click')
      expect(mockToggle).not.toHaveBeenCalled()
    })

    // the mockData has 5 sets, so the table should display 5 rows as well
    it('the number of rows is corresponding to the number of datasets', () => {
      expect(wrapper.find({ 'data-testid': 'table-rows' })).toHaveLength(5)
    })
  })
})

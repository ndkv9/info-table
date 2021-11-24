import React from 'react'
import { shallow } from 'enzyme'
import Notification from './Notification'

describe('<Notification />', () => {
  let wrapper

  describe('render()', () => {
    it('do not display as default', () => {
      wrapper = shallow(<Notification isError={false} isFetchedAll={false} />)
      expect(wrapper.find({ 'data-testid': 'notification' }).exists()).toBe(
        false,
      )
    })

    it('display when having error with proper message', () => {
      wrapper = shallow(<Notification isError={true} isFetchedAll={false} />)
      expect(wrapper.find({ 'data-testid': 'notification' })).toHaveLength(1)
      expect(wrapper.find({ 'data-testid': 'notification' }).text()).toBe(
        'We had problems fetching your data. Please try again!',
      )
    })

    it('display when fetching all data with proper message', () => {
      wrapper = shallow(<Notification isError={false} isFetchedAll={true} />)
      expect(wrapper.find({ 'data-testid': 'notification' })).toHaveLength(1)
      expect(wrapper.find({ 'data-testid': 'notification' }).text()).toBe(
        'Fetched all data!',
      )
    })
  })
})

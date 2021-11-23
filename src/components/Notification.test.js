import React from 'react'
import { shallow } from 'enzyme'
import Notification from './Notification'

describe('<Notification />', () => {
  let wrapper
  let message = 'I am a message'

  beforeEach(() => {
    wrapper = shallow(<Notification notification={message} />)
  })

  describe('it should', () => {
    it('render the proper message', () => {
      expect(wrapper.find({ 'data-testid': 'notification' })).toHaveLength(1)
      expect(wrapper.text()).toEqual('I am a message')
    })
  })
})

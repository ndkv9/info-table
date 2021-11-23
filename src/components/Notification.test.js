import React from 'react'
import { shallow } from 'enzyme'
import Notification from './Notification'

describe('<Notification />', () => {
  let wrapper
  let message = 'I am a message'

  beforeEach(() => {
    wrapper = shallow(<Notification notification={message} />)
  })

  describe('render()', () => {
    it('renders the proper message', () => {
      expect(wrapper.find({ 'data-testid': 'notification' })).toHaveLength(1)
    })
  })
})

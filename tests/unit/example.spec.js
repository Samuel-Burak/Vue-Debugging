import { shallowMount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import Welcome from '@/components/Welcome.vue'
import Alert from '@/components/alert.vue'
import axios from 'axios'
import { BButton } from 'bootstrap-vue'
import { when } from 'jest-when'
import Vue from 'vue'

jest.mock('axios');

async function getFirstAlbumTitle() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
    return response.data[0].title;
}

describe('async stuff', () => {
  it('returns the title of the first album', async () => {
      axios.get.mockResolvedValue({
        data: [
          {
            userId: 1,
            id: 1,
            title: 'My First Album'
          },
          {
            userId: 1,
            id: 2,
            title: 'Album: The Sequel'
          }
        ]
      });
    
      const title = await getFirstAlbumTitle();
      expect(title).toContain('My First Album');
  
  });
})

describe("lifecycle methods", () => {
  let wrapper = null
  it("checks the props",  async () => {
    wrapper = shallowMount(Welcome);
    // await flushPromises()

    expect(wrapper.vm.title).toBe('new title')
    
    expect(wrapper.vm.buttons).toContain('b3')
    
    expect(axios.get).toHaveBeenCalledWith("https://mocki.io/v1/cda5c244-485e-4f61-8035-ee7d8b8303bc")

    const dummyAPI = {
      data: [
        {
          "name": "first",
          "value": 1
        },
        {
          "name": "second",
          "value": 2
        },
        {
          "name": "third",
          "value": 3
        }
      ]
    }

    when(axios.get).calledWith("https://mocki.io/v1/cda5c244-485e-4f61-8035-ee7d8b8303bc").mockResolvedValue(dummyAPI)

    // jest.useFakeTimers()
    // jest.advanceTimersByTime(1000)
    debugger
    // await Vue.nextTick()
    expect(wrapper.vm.jsonData).toContain('an error')

  })
})

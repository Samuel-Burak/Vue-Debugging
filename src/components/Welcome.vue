<template>
    <div>
      <h1> {{ title }} </h1>
      <h2> {{ showThisMessage }} </h2>
      <button v-for="button in buttons" :key="button"> {{ button }} </button>
      <br>
      <button v-for="jsons in jsonData" :key="jsons"> {{ jsons }} </button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      title: 'Welcome page title',
      buttons: ['b1'],
      jsonData: {}
    }
  },

  computed: {
    showThisMessage () {
      return 'this is the returned showMessage'
    }
  },

  mounted () {
    this.title = 'new title'
    this.buttons = ['b1', 'b2', 'b3']

    axios.get('https://mocki.io/v1/cda5c244-485e-4f61-8035-ee7d8b8303bc')
      .then(response => (this.jsonData = [response.data[0].value, response.data[1].value, response.data[2].value]))
      .catch(error => console.log(error))
  }
}
</script>

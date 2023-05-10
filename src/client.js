import {createClient} from 'contentful'
const contentful = require('contentful')
const client = contentful.createClient({
		  space: '2q66jr3wkfx6',
		  environment: 'master', // defaults to 'master' if not set
		  accessToken: 'X415_UM9qcA9TrD_2IMWl1QbCQIvLE9ea9korxh81u8'
})

client.getEntries()
.then((response) => console.log(response.items))
.catch(console.error)

export default client

import axios from 'axios'

export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses/',
	headers: {
		'Authorization': 'Bearer J9FhKWQTIGSyGcUaPqrDOk7Uiyk8x-CV-Vq48s9pXvajmSaxD2__tZoX3Yx'
	}
})
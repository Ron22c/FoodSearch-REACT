import {useEffect} from 'react'
import yelp from '../api/yelp'

export const useFetchRestrants = (updateImages) => {

	const loadRestraints = async (term) => {
		const response = await yelp.get('/search', {
			params: {
				location: 'NYC',
				limit: 30,
				term: term
			}
		})
		updateImages(response.data.businesses)
	}

	useEffect(()=> {
		loadRestraints('')
	}, [])

	return {loadRestraints}
}
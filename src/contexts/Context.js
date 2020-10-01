import React, {useReducer} from 'react'

const Context = React.createContext()

const reducer = (state, action) => {
	switch(action.type) {
		case 'updateTerm':
			return {...state, term:action.payload}
		case 'updateImage':
			return {...state, images:action.payload}
		default:
			return state
	}
}

export const Provider = ({children}) => {
	const [state, dispatch] = useReducer(reducer, {term:'', images:[]})
	
	const updateTerm = (term)=> {
		dispatch({type:'updateTerm', payload: term})
	}
	
	const updateImages = (imageData)=> {
		dispatch({type:'updateImage', payload: imageData})
	}
	
	return (
		<Context.Provider value={{state, updateTerm, updateImages}}>
			{children}
		</Context.Provider>
	)
}

export default Context
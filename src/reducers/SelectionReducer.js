//here if we put state = null, it will check if state is undefined. 
//If yes set it to null. We do that because state is undefined at the 
//beginning and we dont want this reducer to return the default.
export default (state=null, action) => {	
	console.log(action);		
	switch (action.type) {
		case 'select_library':
			return action.payload;
		default:
			return state;
	}
};

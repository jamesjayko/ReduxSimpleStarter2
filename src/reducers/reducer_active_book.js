// state argument is not application state, only the state this reducer is responsible for.
export default function(state = null, action) {
	switch (action.type) {
		case 'BOOK_SELECTED':
			// whatever is returned will be the new state of that key in reducers/index.js
			return action.payload;
			break;

		default:
			return state;
			break;
	}

	return state;
}

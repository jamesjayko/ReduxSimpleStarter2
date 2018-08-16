// state argument is not application state, only the state this reducer is responsible for.
export default function(state = null, action) {
	switch (action.type) {
		case 'BOOK_SELECTED':
			// console.log('what is state active book:', state);

			return action.payload;
			break;

		default:
			return state;
			break;
	}

	return state;
}

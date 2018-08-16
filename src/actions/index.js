export function selectBook(book) {
    // selectBook is an ActionCreator, it needs to return an action, an object with a type property.
    // payload is the needed data that is passed into the reducer to set new state or manipulate/update etc.
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}
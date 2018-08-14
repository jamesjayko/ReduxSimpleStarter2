import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux'; // binds all the actions to reducer to make sure it's excuted

class BookList extends Component {
	renderList() {
		return this.props.books.map(book => {
			return (
				<li key={book.title} className="list-group-item">
					{book.title}
				</li>
			);
		});
	}

	render() {
		return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
	}
}

function mapStateToProps(state) {
	// whatever is returned will show up as this.props inside of BookList
	return {
		books: state.books
	};
}
// anything returned from mapDispatchToProps will end up as this.props on the BookList so this.props.selectBook will work.
function mapDispatchToProps(dispatch) {
	// Whenever selectBook is called, the result should be passed to all our reducers.
	return bindActionCreators({ selectBook: selectBook }, dispatch);
}
// promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook. Make it available as a prop.
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BookList);

import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component {
	componentDidMount() {
		const { id } = this.props.match.params; // react-router provides this so we can access the url route path. in this case, we just want id.
		this.props.fetchPost(id);
	}

	onDeleteClick() {
		const { id } = this.props.match.params; // react-router provides this so we can access the url route path. in this case, we just want id.
		this.props.deletePost(id, () => {
			this.props.history.push('/');
		});
	}

	render() {
		const { post } = this.props;
		// posts[this.props.match.params.id]; // single post we want to show

		if (!post) {
			return <div>Loading...</div>;
		}

		return (
			<div>
				<Link type="button" className="btn btn-info" to="/">
					Back To Index
				</Link>
				<button
					className="btn btn-danger pull-xs-right"
					onClick={this.onDeleteClick.bind(this)}
				>
					Delete Post
				</button>
				<h3>{post.title}</h3>
				<h6>Categories: {post.categories}</h6>
				<p>{post.content}</p>
			</div>
		);
	}
}

function mapStateToProps({ posts }, ownProps) {
	// this.props === ownProps; ownProps is this component's all props.
	return { post: posts[ownProps.match.params.id] };
}

export default connect(
	mapStateToProps,
	{ fetchPost, deletePost }
)(PostsShow);

import React, { Component } from "react";
import { connect } from "react-redux";
import { deletePost } from "../actions/postActions";

class Post extends Component {
  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push("/");
  };
  render() {
    console.log(this.props);
    const post = this.props.post ? (
      <div className="post">
        <h4>{this.props.post.title}</h4>
        <div>{this.props.post.body}</div>
        <div className="center">
          <button className="btn grey" onClick={this.handleClick}>
            Delete Post
          </button>
        </div>
      </div>
    ) : (
      <div className="center">Loading.post...</div>
    );
    return <div className="container">{post}</div>;
  }
}
const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id === id)
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deletePost: id => {
      dispatch(deletePost(id));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Post);

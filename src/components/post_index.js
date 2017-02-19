import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fecthPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
    componentWillMount() {
        this.props.fecthPosts();

        console.log(this.props.fecthPosts());
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="posts/new" className="btn btn-primary" >
                        Add a post
                    </Link>
                </div>
                Lists of blog posts
        </div>);
    }
}

export default connect(null, { fecthPosts: fecthPosts })(PostsIndex);
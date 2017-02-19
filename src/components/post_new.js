import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createPost } from '../actions/index';
import { reduxForm } from 'redux-form';

class PostNew extends Component {

    render() {
        const {fields: {title, categories, content}, handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit(this.props.createPost)}>
                <h3>Create a new Posts</h3>

                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" {...title} />
                </div>

                <div className="form-group">
                    <label>categories</label>
                    <input type="text" className="form-control" {...categories} />
                </div>

                <div className="form-group">
                    <label>Content</label>
                    <textarea className="form-control" {...content} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

//redux form can be used to inject action bindActionCreators
//connect: first argument is mapSatetoProps, 2nd is map dispatch to props
//reduxForm, 1st is form config, 2nd is mapSatetoProps, 3rd is map dispatch to props
export default reduxForm({
    //unique
    form: "PostsNewForm",
    fields: ['title', 'categories', 'content']
}, null, { createPost })(PostNew);
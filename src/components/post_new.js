import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createPost } from '../actions/index';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

class PostNew extends Component {

    static contextTypes = {
        router: PropTypes.object
    };

    onbSubmit(props) {
        this.props.createPost(props).then(
            () => {
                //blog post has been created, navigate the users to the index
                //we navigate by calling this.context.push with the new path to 
                //navigat to
                this.context.router.push("/");
            }

        );
    }

    render() {
        const {fields: {title, categories, content}, handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit(this.onbSubmit.bind(this))}>
                <h3>Create a new Posts</h3>

                <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`} >
                    <label>Title</label>
                    <input type="text" className="form-control" {...title} />
                    <div className="text-help">
                        {title.touched ? title.error : ""}
                    </div>
                </div>

                <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`} >
                    <label>categories</label>
                    <input type="text" className="form-control" {...categories} />
                    <div className="text-help">
                        {categories.touched ? categories.error : ""}
                    </div>
                </div>

                <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`} >
                    <label>Content</label>
                    <textarea className="form-control" {...content} />
                    <div className="text-help">
                        {content.touched ? content.error : ""}
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger" >Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = "Enter a username";
    }

    if (!values.categories) {
        errors.categories = "Enter a categories";
    }

    if (!values.content) {
        errors.content = "Enter some content";
    }

    return errors;
}

//redux form can be used to inject action bindActionCreators
//connect: first argument is mapSatetoProps, 2nd is map dispatch to props
//reduxForm, 1st is form config, 2nd is mapSatetoProps, 3rd is map dispatch to props
export default reduxForm({
    //unique
    form: "PostsNewForm",
    fields: ['title', 'categories', 'content'],
    validate: validate
}, null, { createPost })(PostNew);
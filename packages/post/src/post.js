import React from 'react';
import PropTypes from 'prop-types';
import Tag from '../../tag/src/tag';
import './post.css';

const Post = ({
  title, children, skills, tools, slug, showBackLink, ...props
}) => (
  <section className="post" {...props}>
    {
      slug
        ? (
          <h2>
            <a className="post__title" href={`/${slug}`}><span className="hyper">{title}</span></a>
          </h2>
        )
        : (
          <h2 className="post__title">
            <span className="hyper">{title}</span>
          </h2>
        )
    }
    <div className="post__content">
      { children }
    </div>
    <Tag title="Skills" tags={skills} />
    <Tag title="Tools" tags={tools} />
    {
      showBackLink
        ? (
          <>
            <hr />
            <a href="/" className="icon-link icon-link--reverse">Back to list</a>
          </>
        )
        : ''
    }
  </section>
);

Post.propTypes = {
  /**
   * Card Title
   */
  title: PropTypes.string,
  /**
   * Body Content
   */
  children: PropTypes.node,
  /**
   * Skills Array
   */
  skills: PropTypes.arrayOf(PropTypes.string),
  /**
   * Tools Array
   */
  tools: PropTypes.arrayOf(PropTypes.string),
  /**
   * URL
   */
  slug: PropTypes.string,
  /**
   * Show Back Link
   */
  showBackLink: PropTypes.bool,
};

Post.defaultProps = {
  title: 'Card Title',
  children: null,
  skills: ['One', 'Two', 'Three'],
  tools: ['One', 'Two', 'Three'],
  slug: '',
  showBackLink: false,
};

export default Post;

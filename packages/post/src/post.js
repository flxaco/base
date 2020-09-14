import React from 'react';
import Tag from '../../tag/src/tag';
// import { ReactComponent as CalendarIcon } from '../icons/calendar-date-2.svg';
// import { ReactComponent as BackIcon } from '../icons/block-left.svg';
import './post.css';

const Post = ({ title, children, skills, tools, slug, showBackLink }) => {
  return <section className="post">
    {
      slug
        ? <h2><a className="post__title" href={`/${slug}`}><span className="hyper">{title}</span></a></h2>
        : <h2 className="post__title">
            <span className="hyper">{title}</span>
          </h2>
    }
    <div className="post__content">
      { children }
    </div>
    <Tag title="Skills" tags={skills} />
    <Tag title="Tools" tags={tools} />
    {
      showBackLink
        ? <><hr /><a href="/" className="icon-link icon-link--reverse">Back to list</a></>
        : ''
    }
  </section>;
};

export default Post;

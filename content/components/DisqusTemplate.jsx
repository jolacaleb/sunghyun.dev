import React from 'react';
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'


function DisqusTemplate(props) {
  let disqusConfig = {
    url: props.post.url,
    identifier: props.post.id,
    title: props.post.title,
  }
  return (
    <>
      <h1>{props.post.title}</h1>
      <CommentCount config={disqusConfig} placeholder={'...'} />
      <Disqus config={disqusConfig} />
    </>
  )
};

export default DisqusTemplate;

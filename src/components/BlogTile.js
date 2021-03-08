import React from 'react';

const styles = {
    backgroundColor: 'yellow',
    border: 'solid 1px red',
    margin: 0,
    padding: 20,
  }

const limitedLength = (intro) => {
  if (intro.length > 25) {
    return `${intro.substr(0, 25)}...`;
  } else {
    return intro;
  }
}

function BlogTile(props){
    const {id,title,intro}=props;
    return(
      <div style={styles}>
      <h2>{id}{title}</h2>
      <p>{limitedLength(intro)}</p>
      </div>
    )
  }

export default BlogTile;
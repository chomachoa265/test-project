import React from 'react';
import 'draft-js/dist/Draft.css';

const Link = (props) => {
    const {url} = props.contentState.getEntity(props.entityKey).getData();
    return (
      <a href={url} style={styles.link}>
        {props.children}
      </a>
    );
  };

  function findLinkEntities(contentBlock, callback, contentState) {
    contentBlock.findEntityRanges(
      (character) => {
        const entityKey = character.getEntity();
        return (
          entityKey !== null &&
          contentState.getEntity(entityKey).getType() === 'LINK'
        );
      },
      callback
    );
  }


  const decorator = new CompositeDecorator([
    {
      strategy: findLinkEntities,
      component: Link,
    },]);

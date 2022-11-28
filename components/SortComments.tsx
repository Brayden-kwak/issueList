import React from 'react';

const SortComments = data => {
  const sortedData = data?.sort((a, b) => {
    return b.comments - a.comments;
  });
  return sortedData;
};

export default SortComments;

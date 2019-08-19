import React from 'react';

// components
import { ListingPosts } from '../../components';
import PageTemplate from '../../templates/PageTemplate';
// queries
import useBlogPage from '../../query-hooks/use-blog-page';

export default function BlogIndex() {
  const data = useBlogPage();

  return (
    <PageTemplate data={data}>
      <ListingPosts />
    </PageTemplate>
  );
}

import React from 'react';

// components
import PageTemplate from '../../templates/PageTemplate';
// queries
import useAboutPage from '../../query-hooks/use-about-page';

export default function BlogIndex() {
  const data = useAboutPage();

  return <PageTemplate data={data} />;
}

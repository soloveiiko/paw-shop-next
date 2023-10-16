import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Breadcrumbs = ({ item }) => {
  const routes = [
    { route: '/', href: ['/'], title: 'Home', slug: null },
    {
      route: '/catalog/[category]',
      href: ['/catalog/'],
      title: 'Catalog',
      slug: ['category'],
    },
    {
      route: '/catalog/[category]/product/[productSlug]',
      href: ['/catalog/', '/product/'],
      title: item || 'Product',
      slug: ['category', 'productSlug'],
    },
  ];
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    const actualRoutes = routes.filter((route) =>
      router.route.includes(route.route)
    );
    const breadcrumbs = actualRoutes.map((route) => {
      let href = '';
      route.slug &&
        route?.slug.map((slug, index) => {
          href += route.href[index] + router.query[slug];
        });
      href === '' && (href = '/');
      return {
        ...route,
        href: href,
      };
    });
    console.log(router);
    setBreadcrumbs(breadcrumbs);
  }, [router]);

  return (
    <ul className="container-horisontal breadcrumbs">
      {breadcrumbs.map((route, index) => (
        <React.Fragment key={index}>
          {index < breadcrumbs.length - 1 ? (
            <Link href={route.href} className="text breadcrumbs__item" passHref>
              {route.title}
            </Link>
          ) : (
            <span className="text breadcrumbs__item breadcrumbs__item_active">
              {route.title}
            </span>
          )}
          {index < breadcrumbs.length - 1 && (
            <span className="text breadcrumbs__item">{'>'}</span>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default Breadcrumbs;

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function Breadcrumbs({ item }) {
  const routes = [
    { route: '/', href: ['/'], title: 'Home', slug: null },
    {
      route: '/catalog',
      href: ['/catalog/all'],
      title: 'Catalog',
      slug: null,
    },
    {
      route: '/catalog/[category]',
      href: ['/catalog/'],
      title: 'Catalog',
      slug: ['category'],
    },
    {
      route: '/catalog/[category]/product/[productSlug]',
      href: ['/catalog/', '/product/'],
      title: 'Product',
      slug: ['category', 'productSlug'],
    },
  ];
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    const actualRoutes = routes.filter((route) =>
      router.route.includes(route.route)
    );
    const breadcrumbs = actualRoutes.map((route, i) => {
      let href = '';
      let title = '';
      route.slug &&
        route.slug.map((slug, index) => {
          href += route.href[index] + router.query[slug];
          if (i < actualRoutes.length - 1) {
            console.log(router.query[slug]);
            router.query[slug]
              ? (title = router.query[slug])
              : (title = route.title);
          }
        });
      href === '' && (href = route.href[0]);
      (title === '' || !title) && (title = route.title);
      return {
        ...route,
        href: href,
        title: title[0].toUpperCase() + title.slice(1),
      };
    });
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
              {item || route.title}
            </span>
          )}
          {index < breadcrumbs.length - 1 && (
            <span className="text breadcrumbs__item">{'>'}</span>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
}

export default Breadcrumbs;

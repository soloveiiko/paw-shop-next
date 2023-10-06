import Link from 'next/link';
export const linksList = [
  { id: 1, name: 'Home', link: '#' },
  { id: 2, name: 'Cat supplies', link: '#' },
  { id: 3, name: 'Dog supplies', link: '#' },
  { id: 4, name: 'Contacts', link: '#' },
  { id: 5, name: 'Tracking', link: '#' },
  { id: 6, name: 'Terms of Service', link: '#' },
  { id: 7, name: 'Refund policy', link: '#' },
  { id: 8, name: 'Privacy policy', link: '#' },
  { id: 9, name: 'Shipping policy', link: '#' },
  { id: 10, name: 'FAQ', link: '#' },
];
function Links() {
  return (
    <nav className="footer__links links">
      <ul className="links__list">
        {linksList.map((link) => (
          <li key={link.id} className="links__item">
            <Link className="links__link" href={link.link}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Links;

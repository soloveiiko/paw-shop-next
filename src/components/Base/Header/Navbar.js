import Link from 'next/link';

const navbarList = [
  {
    id: 1,
    name: 'For <b>cat</b>',
    link: '/catalog/cat',
  },
  {
    id: 2,
    name: 'For <b>dog</b>',
    link: '/catalog/dog',
  },
  { id: 3, name: 'Contacts', link: '#' },
  { id: 4, name: 'Tracking', link: '#' },
];
function Navbar() {
  return (
    <nav className="header__navbar navbar">
      <ul className="navbar__list">
        {navbarList.map((item) => (
          <li key={item.id} className="navbar__item">
            <Link
              className="navbar__link"
              href={item.link}
              dangerouslySetInnerHTML={{ __html: item.name }}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;

import linkedin from '../assets/linkedin.svg';
import leetcode from '../assets/leetcode.svg';
import github from '../assets/github.svg';
import twitter from '../assets/twitter.svg';
import email from '../assets/email.svg';

const links = [
  {
    href: 'https://www.linkedin.com/in/asmita-agarwal',
    icon: linkedin,
    alt: 'LinkedIn',
    external: true,
  },
  {
    href: 'https://leetcode.com/asmitaagarwal4',
    icon: leetcode,
    alt: 'LeetCode',
    external: true,
  },
  {
    href: 'https://github.com/asmitaagarwal4',
    icon: github,
    alt: 'GitHub',
    external: true,
  },
  { 
    href: 'https://twitter.com/asmitaagarwal4',
    icon: twitter,
    alt: 'Twitter',
    external: true,
  },
  {
    href: 'mailto:asmitaagarwal4@gmail.com',
    icon: email,
    alt: 'Email',
    external: false,
  },
];

function Sidebar() {
  return (
    <aside className="relative md:fixed md:right-8 md:top-1/2 md:-translate-y-1/2 md:w-14 bg-white/0 backdrop-blur-xs border rounded-xl p-3.5 flex flex-col items-start z-50 h-auto shadow-lg w-full md:flex md:w-14 mt-8 md:mt-0">
      <nav className="w-full">
        <ul className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4 w-full justify-center md:justify-start">
          {links.map(link => (
            <li key={link.alt}>
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="hover:underline text-white"
              >
                <img src={link.icon} alt={link.alt} className="w-8 h-8" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;

import linkedin from '../assets/linkedin.svg';
import leetcode from '../assets/leetcode.svg';
import github from '../assets/github.svg';
import twitter from '../assets/twitter.svg';
import email from '../assets/email.svg';

function Sidebar() {
  return (
    <aside className="relative md:fixed md:right-8 md:top-1/2 md:-translate-y-1/2 md:w-14 bg-white/0 backdrop-blur-xs border rounded-xl p-3.5 flex flex-col items-start z-50 h-auto shadow-lg w-full md:flex md:w-14 mt-8 md:mt-0">
      <nav className="w-full">
        <ul className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4 w-full justify-center md:justify-start">
          <li><a href="https://www.linkedin.com/in/asmita-agarwal" target="_blank" rel="noopener noreferrer" className="hover:underline text-white">
            <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />
          </a></li>
          <li><a href="https://www.linkedin.com/in/asmita-agarwal" target="_blank" rel="noopener noreferrer" className="hover:underline text-white">
            <img src={leetcode} alt="LeetCode" className="w-8 h-8" />
          </a></li>
          <li><a href="https://github.com/asmitaagarwal4" target="_blank" rel="noopener noreferrer" className="hover:underline text-white">
            <img src={github} alt="GitHub" className="w-8 h-8" />
          </a></li>
          <li><a href="https://www.linkedin.com/in/asmita-agarwal" target="_blank" rel="noopener noreferrer" className="hover:underline text-white">
            <img src={twitter} alt="Twitter" className="w-8 h-8" />
          </a></li>
          <li><a href="mailto:asmitaagarwal4@gmail.com" className="hover:underline text-white">
            <img src={email} alt="Email" className="w-8 h-8" />
          </a></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#171D22] text-white py-10 px-6 md:px-10 lg:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center w-full">

        <h2 className="text-xl md:text-4xl font-semibold mb-4 md:mb-0">
          Cine<span className="text-[#E2D609]">Seek</span>
        </h2>

        <nav className="flex-1 flex justify-center space-x-6 mb-4 md:mb-0">
          <Link href="/" className="hover:text-[#E2D609] text-lg transition-colors">Home</Link>
          <Link href="/movies" className="hover:text-[#E2D609] text-lg transition-colors">Movies</Link>
          <Link href="/contact" className="hover:text-[#E2D609] text-lg transition-colors">Contact</Link>
          <Link href="/privacy" className="hover:text-[#E2D609] text-lg transition-colors">Privacy Policy</Link>
        </nav>

        <div className="flex space-x-4">
          <FontAwesomeIcon icon={faTwitter} size="lg" />
          <FontAwesomeIcon icon={faFacebook} size="lg" />
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-400">
        <p>&copy; 2024 CineSeek. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Header () {
  return (
    <>
      <div className="flex flex-wrap justify-between">
        <h3 className="text-3xl font-semibold">Rwitesh Bera</h3>
      </div>
      <div className="flex flex-wrap items-center gap-4 mt-2">
        <span className="text-gray-600">Find me on:</span>
        <a
          href="https://github.com/rwiteshbera"
          target="_blank"
          className="flex items-center hover:text-gray-700"
        >
          <FaGithub className="text-base" />
        </a>
        <a
          href="https://www.linkedin.com/in/rwiteshbera/"
          target="_blank"
          className="flex items-center hover:text-gray-700"
        >
          <FaLinkedin className="text-base" />
        </a>
        <a
          href="https://x.com/rwiteshbera"
          target="_blank"
          className="flex items-center hover:text-gray-700"
        >
          <FaXTwitter className="text-base" />
        </a>
        <span className="text-gray-600">and</span>
        <a
          href="mailto:rwiteshbera@gmail.com"
          target="_blank"
          className="flex items-center hover:text-gray-700"
        >
          <MdEmail className="text-base" />
        </a>
      </div>
    </>
  );
};

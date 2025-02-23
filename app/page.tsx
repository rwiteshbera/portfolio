import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="h-5/6 w-full max-w-2xl my-14 mx-auto px-4">
      <section className="flex flex-wrap justify-between">
        <h3 className="text-3xl font-semibold">Rwitesh Bera</h3>
      </section>
      <section className="flex flex-wrap items-center gap-4 mt-2">
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
      </section>
      <section className="mt-4 text-justify">
        <h6 className="text-lg font-semibold text-green-500">About</h6>
        <p>
          I am a Software Engineer based in India with a passion for building
          scalable solutions. Currently working at{" "}
          <a
            href="https://www.kloudmate.com/"
            target="_blank"
            className="underline"
          >
            KloudMate
          </a>
          , I focus on developing applications while following best practices in
          software development.
        </p>
      </section>
      <section className="mt-4 text-base">
        <h6 className="text-lg font-semibold text-green-500">Experience</h6>
        <div className="relative ml-2 mt-2">
          <div className="absolute left-0 top-2 h-full w-[2px] bg-gray-200"></div>

          <div className="space-y-6">
            <div className="relative pl-6">
              <div className="absolute left-[-5px] top-2 h-3 w-3 rounded-full bg-green-500"></div>
              <div className="flex flex-wrap justify-between">
                <h4 className="font-medium">KloudMate</h4>
                <span className="text-sm text-gray-500">
                  Jan,2025 - Present
                </span>
              </div>
              <p className="text-sm font-medium text-gray-600">
                Software Developer
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Building scalable cloud-native solutions
              </p>
            </div>

            <div className="relative pl-6">
              <div className="absolute left-[-5px] top-2 h-3 w-3 rounded-full bg-green-500"></div>
              <div className="flex flex-wrap justify-between">
                <h4 className="font-medium">
                  Meridian Solutions Pvt. Ltd.
                </h4>
                <span className="text-sm text-gray-500">
                  Feb,2024 - Jan,2025
                </span>
              </div>
              <p className="text-sm font-medium text-gray-600">
                Cloud Solution Executive
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Providing IT Solutions related to Microsoft 365
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-4 text-justify">
        <h6 className="text-lg font-semibold text-green-500">Interests</h6>
        <ol className="list-disc pl-4">
          <li>Trying out new apps and tech just for fun.</li>
          <li>Getting lost in a good book.</li>
          <li>Travelling</li>
        </ol>
      </section>
      <section className="mt-4">
        <h6 className="text-lg font-semibold text-green-500">Projects</h6>
        <ol className="list-disc pl-4">
          <li>
            <a href="https://github.com/rwiteshbera/rapidgo" target="_blank">
              RapidGo - Fast, minimalist web framework for GoLang
            </a>
          </li>
          <li>
            <a href="https://github.com/rwiteshbera/KeyGuard" target="_blank">
              KeyGuard - CLI Based Password Manager
            </a>
          </li>
          <li>
            <a href="https://github.com/rwiteshbera/Hyperion" target="_blank">
              Hyperion - Core Blockchain
            </a>
          </li>
        </ol>
      </section>
    </div>
  );
}

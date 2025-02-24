import Link from "../modules/link";
import Section from "../modules/section";

export default function Projects() {
  return (
    <Section heading="Projects">
      <ol className="list-disc pl-4">
        <li>
          <Link
            to="https://github.com/rwiteshbera/rapidgo"
            name="RapidGo - Fast, minimalist web framework for GoLang"
          />
        </li>
        <li>
          <Link
            to="https://github.com/rwiteshbera/KeyGuard"
            name="KeyGuard - CLI Based Password Manager"
          />
        </li>
        <li>
          <Link
            to="https://github.com/rwiteshbera/Hyperion"
            name="Hyperion - Core Blockchain"
          />
        </li>
      </ol>
    </Section>
  );
}

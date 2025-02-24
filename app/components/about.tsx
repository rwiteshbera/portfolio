import Link from "../modules/link";
import Section from "../modules/section";

export default function About() {
  return (
    <Section className="text-justify" heading="About">
      <p>
        I am a Software Engineer based in India. Currently, I work at{" "}
        <Link to="https://www.kloudmate.com/" name="KloudMate" className="underline" />
        .  I enjoy designing applications, understanding systems at a deeper level, and making them more reliable. With a Bachelor degree in Computer Science and Engineering, I am always experimenting, refining my approaches, and finding smarter ways to build software.
      </p>
    </Section>
  );
}

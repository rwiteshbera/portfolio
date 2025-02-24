import Link from "../modules/link";
import Section from "../modules/section";

export default function About() {
  return (
    <Section className="text-justify" heading="About">
      <p>
        I am a Software Engineer based in India. Currently, I work at{" "}
        <Link to="https://www.kloudmate.com/" name="KloudMate" className="underline" />
        . I enjoy building programs that solve real problems. I like designing
        applications, understanding how things work under the hood, and making
        systems reliable. With a Bachelor degree in Computer Science and
        Engineering, I enjoy experimenting, improving my approaches, and finding
        smarter ways to build software.
      </p>
    </Section>
  );
}

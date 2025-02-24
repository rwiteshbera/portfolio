import Link from "../modules/link";
import Section from "../modules/section";

export default function About() {
  return (
    <Section className="text-justify" heading="About">
      <p>
        I am a Software Engineer based in India. Currently, I work at{" "}
        <Link to="https://www.kloudmate.com/" name="KloudMate" className="underline" />
        . I am curious about technlogy and enjoy building programs that solve real problems. I like designing applications, understanding how things work under the hood, and making software more reliable. When I am not learning, you will probably find me spending time alone or hanging out with friends.
      </p>
    </Section>
  );
}

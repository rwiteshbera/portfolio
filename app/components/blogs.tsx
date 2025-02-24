import Link from "../modules/link";
import Section from "../modules/section";

export default function Blogs() {
    return (
        <Section heading="Blogs">
        Find my blogs: <Link to="https://rwitesh.substack.com/" name="Substack" className="underline"/>
        </Section>
    )
}
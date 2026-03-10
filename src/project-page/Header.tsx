import gh from "../assets/github.png";
import globe from "../assets/globe.png";
import Button from "../components/Button";

export function Header({
  name,
  demo,
  github,
}: {
  name: string;
  demo: string;
  github: string;
}) {
  return (
    <div className="flex md:flex-row flex-col items-start md:items-center gap-2 md:gap-4 lg:gap-8 mt-6 md:mt-8 lg:mt-10 px-basic">
      <h1 className="font-medium text-accent text-2xl md:text-3xl lg:text-4xl">
        {name}
      </h1>
      <div className="inline-flex md:items-center gap-2 md:gap-4">
        <Button href={demo} label="демо" variant="default" iconURL={globe} />
        <Button href={github} label="github" variant="default" iconURL={gh} />
      </div>
    </div>
  );
}

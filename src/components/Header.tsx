import { Link, useMatch } from "react-router-dom";
import profileIcon from "../assets/avatar.jpg";
import waving from "../assets/waving.png";
import { CONTACTS } from "../data/contacts";
import Button from "./Button";

export function Header({ className }: { className?: string }) {
  const onMain = useMatch("/");

  return (
    <header
      className={`flex gap-y-4 w-full justify-between px-basic pt-2 ${onMain ? "items-start pt-5 md:pt-8 lg:pt-10 flex-col md:flex-row" : "items-center"} ${className}`}
    >
      {onMain ?
        <ProfileInfo />
      : <Link to={"/"}>
          <img
            alt="ВМ"
            src={profileIcon}
            className="p-0.5 border border-border rounded-full size-9.5"
          />
        </Link>
      }
      <SocialLinks />
    </header>
  );
}

function ProfileInfo() {
  return (
    <div className="items-center gap-4 grid grid-cols-[3.5rem_1fr]">
      <div className="p-0.5 border border-border rounded-full w-full aspect-square">
        <img alt="ВМ" src={profileIcon} className="rounded-full w-full" />
      </div>
      <div>
        <h1 className="relative font-medium text-accent text-lg">
          <span>Валерия Мартыненко</span>
          <div className="inline-flex -top-2 -right-10 absolute justify-center items-center border border-border rounded-full size-7">
            <img alt="ВМ" src={waving} className="pb-0.5 pl-0.5 size-4 wave" />
          </div>
        </h1>
        <h2 className="text-sm">Frontend-разработчик</h2>
      </div>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="flex items-center gap-2">
      <span className="hidden md:inline mr-1 text-foreground/50 text-sm shrink-0">
        для связи
      </span>
      <Button
        href={CONTACTS.tg.link}
        iconURL={CONTACTS.tg.icon}
        inApp={false}
        variant="round"
      />
      <Button
        href={CONTACTS.mail.link}
        iconURL={CONTACTS.mail.icon}
        inApp={false}
        variant="round"
      />
      <Button
        href={CONTACTS.gh.link}
        iconURL={CONTACTS.gh.icon}
        inApp={false}
        variant="round"
      />
    </div>
  );
}

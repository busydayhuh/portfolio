import Arrow from "../../assets/Arrow";
import { SectionHeader } from "../../components/SectionHeader";
import { CONTACTS } from "../../data/contacts";

export function ContactsSection() {
  const contactsArr = Object.values(CONTACTS);
  return (
    <section className="px-basic">
      <SectionHeader text="контакты" id="contacts" />
      <p className="mt-4 md:mt-8 mb-4 lg:mb-6 text-base">
        Открыта к предложениям о работе и сотрудничеству:
      </p>
      <div className="gap-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {contactsArr.map((contact) => (
          <ContactLink
            title={contact.title}
            href={contact.link}
            desc={contact.username}
            key={contact.title}
          />
        ))}
      </div>
    </section>
  );
}

function ContactLink({
  title,
  href,
  desc,
}: {
  title: string;
  href: string;
  desc: string;
}) {
  return (
    <div className="lg:space-y-2 hover:[&_p]:text-accent">
      <p className="font-medium text-foreground/70">{title}</p>
      <a
        href={href}
        target="_blank"
        className="group inline-link inline-flex items-center gap-1.5 font-medium"
      >
        {desc}
        <Arrow className="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 duration-150 ease-in-out" />
      </a>
    </div>
  );
}

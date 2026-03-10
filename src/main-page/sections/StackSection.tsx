import { STACK } from "../../data/stack";

export function StackSection() {
  return (
    <section id="stack" className="">
      <div className="gap-6 gap-x-10 lg:gap-8 lg:gap-x-20 grid grid-cols-1 md:grid-cols-[max-content_1fr] px-basic max-w-6xl">
        <div className="space-y-6 lg:space-y-8">
          <StackSubsection name="lang" title="Языки программирования" />
          <StackSubsection name="ui" title="Разметка и стили" />
          <StackSubsection
            name="backend"
            title="Работа с API и базовый бэкенд"
          />
        </div>
        <div className="space-y-6 lg:space-y-8">
          <StackSubsection name="libraries" title="Фреймворки и библиотеки" />
          <StackSubsection name="tools" title="Инструменты и сборщики" />
        </div>
      </div>
    </section>
  );
}

export function StackSubsection({
  name,
  title,
}: {
  name: keyof typeof STACK;
  title: string;
}) {
  return (
    <div>
      <p className="mb-3 text-foreground/90 text-xs">{title}</p>
      <div className="flex flex-col gap-2">
        {STACK[name].map((subsection, index) => (
          <div
            className="flex flex-wrap items-center gap-x-2.5 gap-y-1"
            key={`${name}_${index}`}
          >
            {subsection.map((elem) => (
              <StackElement text={elem} key={elem} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function StackElement({ text }: { text: string }) {
  return (
    <div className="inline-flex justify-center items-center bg-secondary px-2.5 rounded-3xl h-7.5 font-medium text-secondary-foreground text-sm hover:scale-105 transition-transform duration-150 ease-in shrink-0">
      <span>{text}</span>
    </div>
  );
}

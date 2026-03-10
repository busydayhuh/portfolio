import { ContactsSection } from "./sections/ContactsSection";
import ProjectsSection from "./sections/ProjectsSection";
import { StackSection } from "./sections/StackSection";

export default function MainPage() {
  return (
    <main className="space-y-8 md:space-y-10 lg:space-y-12 mt-4 md:mt-8">
      <p className="px-basic max-w-3xl text-base">
        Создаю веб-приложения на React с чистой архитектурой, продуманной
        логикой работы с данными и понятными интерфейсами. Ранее работала с
        вёрсткой и UX/UI в EdTech.
      </p>
      <StackSection />
      <ProjectsSection />
      <ContactsSection />
    </main>
  );
}

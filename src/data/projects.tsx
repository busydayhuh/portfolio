type Image = {
  id: number;
  main: string;
  main_mob: string;
  thumb: string;
  full: string;
};

export type Project = {
  id: string;
  title: string;
  short_desc: React.ReactNode;
  highlights: string[];
  long_desc: React.ReactNode;
  stack: number[];
  demo_link: string;
  github_link: string;
  features: React.ReactNode;
  architecture: React.ReactNode;
  cover: string;
  gallery: Image[];
};

export const PROJECTS: Project[] = [
  {
    id: "wisharchive",
    title: "Wish archive",
    short_desc: (
      <p>
        SPA на React для ведения вишлистов с авторизацией пользователей,
        публичными и приватными списками и системой бронирования подарков.
      </p>
    ),
    highlights: [
      "Feature-based архитектура",
      "Optimistic UI",
      "SWR-кеширование",
      "ESLint boundaries",
      "Ролевая модель доступа",
    ],
    long_desc: (
      <p>
        <strong>Wish archive</strong> — SPA-приложение на React, где можно
        создавать желания и вишлисты, управлять ими и взаимодействовать с
        другими пользователями. Проект решает практическую задачу: помогает
        сохранить понравившиеся вещи, поделиться желаниями с близкими и избежать
        повторяющихся подарков.
      </p>
    ),
    stack: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    demo_link: "https://busydayhuh.github.io/wisharchive/",
    github_link: "https://github.com/busydayhuh/wisharchive",
    features: (
      <>
        <ul className="star-list main-text">
          <li>
            <strong>Аутентификация пользователей:</strong> регистрация и вход
            через Appwrite.
          </li>
          <li>
            <strong>CRUD-операции с данными:</strong> создание, редактирование и
            удаление вишлистов и желаний.
          </li>
          <li>
            <strong>Система приватности:</strong> поддержка публичных и
            приватных списков с разграничением доступа.
          </li>
          <li>
            <strong>Взаимодействие пользователей:</strong> механизм бронирования
            желаний предотвращает дублирование подарков.
          </li>
          <li>
            <strong>Оптимистичный UI:</strong> интерфейс обновляется до ответа
            сервера с откатом состояния при ошибках.
          </li>
          <li>
            <strong>Адаптивный интерфейс:</strong> корректная работа на
            мобильных и десктопных устройствах.
          </li>
          <li>
            <strong>Темизация:</strong> поддержка светлой и тёмной темы.
          </li>
        </ul>
      </>
    ),
    architecture: (
      <>
        <p>
          Приложение реализовано как <strong>SPA на React</strong> с
          использованием <strong>backend-as-a-service (Appwrite)</strong>.
        </p>
        <p>
          Проект организован по <strong>feature-based архитектуре (FSD)</strong>{" "}
          с тремя уровнями: <strong>app</strong> (глобальная конфигурация),{" "}
          <strong>features</strong> (фичи с model и UI) и{" "}
          <strong>shared</strong> (переиспользуемые компоненты, хуки, store и
          API).
        </p>
        <p>
          Основная бизнес-логика вынесена на клиентскую сторону. В рамках
          проекта были реализованы следующие технические решения:
        </p>
        <ul className="ml-2 md:ml-4 main-text star-list">
          <li>
            <strong>Управление состоянием приложения</strong> через React
            Context API с разделением глобального состояния и локального
            состояния компонентов.
          </li>
          <li>
            <strong>Отдельный слой API-абстракций</strong>, инкапсулирующий
            работу с Appwrite.
          </li>
          <li>
            <strong>Управление данными и кеширование с помощью SWR</strong> для
            оптимистичных обновлений интерфейса, синхронизации данных и
            реализации бесконечного скролла в списках.
          </li>
          <li>
            <strong>Контроль целостности данных</strong> при параллельных
            действиях пользователей (например, при бронировании подарков).
          </li>
          <li>
            <strong>Клиентская логика разграничения прав доступа</strong> для
            публичных и приватных списков.
          </li>
          <li>
            Контроль архитектурных зависимостей с помощью{" "}
            <strong>ESLint boundaries</strong>.
          </li>
          <li>
            <strong>Строгая типизация TypeScript</strong> для моделей, API и
            форм.
          </li>
          <li>
            Различные состояния интерфейса для пользовательских сценариев:{" "}
            <strong>loading states</strong> при загрузке данных,{" "}
            <strong>empty states</strong> для пустых списков,
            <strong>error states</strong> при сетевых и серверных ошибках.
          </li>
          <li>
            <strong>Компонентная архитектура интерфейса</strong> с
            переиспользуемыми UI-компонентами.
          </li>
        </ul>
        <p>
          Такой подход позволил спроектировать устойчивую клиентскую логику для
          пользовательских сценариев в React-приложении.
        </p>
      </>
    ),

    cover: "/portfolio/covers/wisharchive_cover.webp",
    gallery: [
      {
        id: 1,
        main: "/portfolio/main/wisharchive_1.webp",
        thumb: "/portfolio/thumb/wisharchive_1.webp",
        main_mob: "/portfolio/mobile/wisharchive_1.webp",
        full: "/portfolio/fullscreen/wisharchive_1.webp",
      },
      {
        id: 2,
        main: "/portfolio/main/wisharchive_9.webp",
        thumb: "/portfolio/thumb/wisharchive_9.webp",
        main_mob: "/portfolio/mobile/wisharchive_9.webp",
        full: "/portfolio/fullscreen/wisharchive_9.webp",
      },
      {
        id: 3,
        main: "/portfolio/main/wisharchive_6.webp",
        thumb: "/portfolio/thumb/wisharchive_6.webp",
        main_mob: "/portfolio/mobile/wisharchive_6.webp",
        full: "/portfolio/fullscreen/wisharchive_6.webp",
      },
      {
        id: 4,
        main: "/portfolio/main/wisharchive_4.webp",
        thumb: "/portfolio/thumb/wisharchive_4.webp",
        main_mob: "/portfolio/mobile/wisharchive_4.webp",
        full: "/portfolio/fullscreen/wisharchive_4.webp",
      },
      {
        id: 5,
        main: "/portfolio/main/wisharchive_7.webp",
        thumb: "/portfolio/thumb/wisharchive_7.webp",
        main_mob: "/portfolio/mobile/wisharchive_7.webp",
        full: "/portfolio/fullscreen/wisharchive_7.webp",
      },
      {
        id: 6,
        main: "/portfolio/main/wisharchive_3.webp",
        thumb: "/portfolio/thumb/wisharchive_3.webp",
        main_mob: "/portfolio/mobile/wisharchive_3.webp",
        full: "/portfolio/fullscreen/wisharchive_3.webp",
      },
      {
        id: 7,
        main: "/portfolio/main/wisharchive_2.webp",
        thumb: "/portfolio/thumb/wisharchive_2.webp",
        main_mob: "/portfolio/mobile/wisharchive_2.webp",
        full: "/portfolio/fullscreen/wisharchive_2.webp",
      },
      {
        id: 8,
        main: "/portfolio/main/wisharchive_13.webp",
        thumb: "/portfolio/thumb/wisharchive_13.webp",
        main_mob: "/portfolio/mobile/wisharchive_13.webp",
        full: "/portfolio/fullscreen/wisharchive_13.webp",
      },
      {
        id: 9,
        main: "/portfolio/main/wisharchive_8.webp",
        thumb: "/portfolio/thumb/wisharchive_8.webp",
        main_mob: "/portfolio/mobile/wisharchive_8.webp",
        full: "/portfolio/fullscreen/wisharchive_8.webp",
      },
      {
        id: 10,
        main: "/portfolio/main/wisharchive_5.webp",
        thumb: "/portfolio/thumb/wisharchive_5.webp",
        main_mob: "/portfolio/mobile/wisharchive_5.webp",
        full: "/portfolio/fullscreen/wisharchive_5.webp",
      },
      {
        id: 11,
        main: "/portfolio/main/wisharchive_10.webp",
        thumb: "/portfolio/thumb/wisharchive_10.webp",
        main_mob: "/portfolio/mobile/wisharchive_10.webp",
        full: "/portfolio/fullscreen/wisharchive_10.webp",
      },
      {
        id: 12,
        main: "/portfolio/main/wisharchive_12.webp",
        thumb: "/portfolio/thumb/wisharchive_12.webp",
        main_mob: "/portfolio/mobile/wisharchive_12.webp",
        full: "/portfolio/fullscreen/wisharchive_12.webp",
      },
      {
        id: 13,
        main: "/portfolio/main/wisharchive_11.webp",
        thumb: "/portfolio/thumb/wisharchive_11.webp",
        main_mob: "/portfolio/mobile/wisharchive_11.webp",
        full: "/portfolio/fullscreen/wisharchive_11.webp",
      },
    ],
  },
  {
    id: "prigorod",
    title: "Пригород",
    short_desc: (
      <p>
        SPA на React для поиска расписаний пригородных электричек с фильтрацией
        поездов, поиском ближайших станций и историей запросов.
      </p>
    ),
    highlights: [
      "Модульная структура",
      "Proxy-сервер",
      "Валидация форм",
      "Query-параметры URL",
    ],
    long_desc: (
      <>
        <p>
          <strong>Пригород</strong> — SPA-приложение на React для поиска
          расписаний пригородных электричек. Проект вырос из простой
          пользовательской задачи: быстро найти подходящий рейс без
          перегруженных интерфейсов и лишних шагов.
        </p>
        <p>
          Основной фокус — удобство поиска, понятные сценарии и аккуратная
          архитектура приложения. Проект приближен к реальным продуктовым
          условиям: с внешним API, формами, состояниями и адаптивным
          интерфейсом.
        </p>
      </>
    ),
    stack: [11, 2, 12, 4, 5, 7, 9, 13, 14, 10],
    demo_link: "https://busydayhuh.github.io/prigorod/",
    github_link: "https://github.com/busydayhuh/prigorod",
    features: (
      <>
        <ul className="main-text star-list">
          <li>
            <strong>Поиск электричек:</strong> список рейсов между двумя
            станциями или по выбранной станции, отображение полных маршрутов
            поездов.
          </li>
          <li>
            <strong>Подсказки ближайших станций</strong> с использованием
            геолокации.
          </li>
          <li>
            <strong>Фильтрация результатов:</strong> экспресс-поезда, уже
            ушедшие рейсы.
          </li>
          <li>
            <strong>Альтернативные варианты маршрута,</strong> если прямого
            рейса нет.
          </li>
          <li>
            Сохранение истории поиска и{" "}
            <strong>синхронизация состояния с URL (query-параметры)</strong>.
          </li>
          <li>
            <strong>Адаптивный интерфейс</strong> с удобной навигацией и
            читаемыми компонентами.
          </li>
        </ul>
      </>
    ),
    architecture: (
      <>
        <p>
          Приложение построено на React с разделением ответственности между
          слоями интерфейса, логики и работы с данными. Навигация реализована
          через <strong>React Router</strong>, состояние — через{" "}
          <strong>React Context API</strong>. Отдельно создан простой{" "}
          <a
            className="inline-link"
            href="https://github.com/busydayhuh/prigorod-proxy-server"
            target="_blank"
          >
            proxy-сервер
          </a>
          , через который отправляются запросы к API Яндекс Расписаний.
        </p>
        <p>В рамках проекта реализованы следующие технические решения:</p>
        <ul className="main-text star-list">
          <li>
            <strong>Модульная структура компонентов</strong> обеспечивает
            разделение UI, страниц, хуков, сервисов и глобального состояния.
          </li>
          <li>
            <strong>Работа с API</strong> через кастомные хуки + SWR позволяет
            кешировать данные и поддерживать их актуальность.
          </li>
          <li>
            <strong>Proxy-сервер</strong> на Express скрывает API-ключи, обходит
            CORS и контролирует формат запросов.
          </li>
          <li>
            <strong>React Router с query-параметрами</strong> используется для
            передачи параметров поиска в URL и их последующей обработки при
            построении списка маршрутов.
          </li>
          <li>
            <strong>UI и формы:</strong> связка Tailwind CSS + shadcn/ui + React
            Hook Form + Zod позволяет создавать удобные формы поиска с
            валидацией и понятным для пользователя отображением ошибок.
          </li>
        </ul>
      </>
    ),
    cover: "/portfolio/covers/prigorod_cover.webp",
    gallery: [
      {
        id: 1,
        main: "/portfolio/main/prigorod_4.webp",
        thumb: "/portfolio/thumb/prigorod_4.webp",
        main_mob: "/portfolio/mobile/prigorod_4.webp",
        full: "/portfolio/fullscreen/prigorod_4.webp",
      },
      {
        id: 2,
        main: "/portfolio/main/prigorod_1.webp",
        thumb: "/portfolio/thumb/prigorod_1.webp",
        main_mob: "/portfolio/mobile/prigorod_1.webp",
        full: "/portfolio/fullscreen/prigorod_1.webp",
      },
      {
        id: 3,
        main: "/portfolio/main/prigorod_2.webp",
        thumb: "/portfolio/thumb/prigorod_2.webp",
        main_mob: "/portfolio/mobile/prigorod_2.webp",
        full: "/portfolio/fullscreen/prigorod_2.webp",
      },
      {
        id: 4,
        main: "/portfolio/main/prigorod_3.webp",
        thumb: "/portfolio/thumb/prigorod_3.webp",
        main_mob: "/portfolio/mobile/prigorod_3.webp",
        full: "/portfolio/fullscreen/prigorod_3.webp",
      },
      {
        id: 5,
        main: "/portfolio/main/prigorod_5.webp",
        thumb: "/portfolio/thumb/prigorod_5.webp",
        main_mob: "/portfolio/mobile/prigorod_5.webp",
        full: "/portfolio/fullscreen/prigorod_5.webp",
      },
      {
        id: 6,
        main: "/portfolio/main/prigorod_6.webp",
        thumb: "/portfolio/thumb/prigorod_6.webp",
        main_mob: "/portfolio/mobile/prigorod_6.webp",
        full: "/portfolio/fullscreen/prigorod_6.webp",
      },
    ],
  },
  {
    id: "persona",
    title: "Persona 5: Fusions",
    short_desc: (
      <p>
        Веб-приложение по мотивам игры Persona 5: каталог персонажей с
        характеристиками и расчет их слияний по игровой логике со стилизацией
        под визуальный код игры.
      </p>
    ),
    highlights: [
      "Чистый JavaScript",
      "Работа с DOM",
      "Работа с массивами данных и бизнес-правилами",
      "BEM",
    ],
    long_desc: (
      <>
        <p>
          <strong>Persona 5: Fusions</strong> — небольшой веб-проект, созданный
          для игроков Persona 5. Приложение представляет собой библиотеку всех
          персон с их характеристиками и калькулятором слияний, работающим по
          внутриигровой логике. Проект создавался для практики в работе с
          данными и бизнес-логикой на чистом JavaScript. Отдельное внимание было
          уделено структуре кода и разделению логики и UI.
        </p>

        <p>
          Интерфейс приложения стилизован под визуальный язык Persona 5, что
          позволило совместить работу с логикой и реализацию более
          нестандартного UI, полюбившегося поклонникам игры.
        </p>
      </>
    ),
    stack: [11, 16, 15],
    demo_link: "https://busydayhuh.github.io/persona-5-fusions/",
    github_link: "https://github.com/busydayhuh/persona-5-fusions",
    features: (
      <>
        <ul className="main-text star-list">
          <li>
            <strong>Каталог всех персонажей:</strong> характеристики, навыки и
            сопротивления, тип наследования навыков.
          </li>
          <li>
            <strong>Калькулятор слияний</strong> выбранной персоны с другими
            персонами по игровой логике.
          </li>
          <li>
            Возможность добавления в расчёты{" "}
            <strong>пользовательских DLC-персон</strong>.
          </li>
          <li>
            <strong>Интерактивные подсказки</strong> и визуальные элементы,
            упрощающие восприятие информации.
          </li>
          <li>
            <strong>Адаптивный интерфейс</strong>, стилизованный под
            оригинальный UI Persona 5.
          </li>
        </ul>
      </>
    ),
    architecture: (
      <>
        <p>
          Приложение написано на чистом JavaScript без фреймворков, с
          использованием HTML, SCSS и сборщика Webpack. Все данные о персонах
          хранятся локально в виде структурированных массивов и объектов.
        </p>
        <p>
          Ключевая часть проекта — реализация логики слияний как{" "}
          <strong>отдельного слоя бизнес-правил</strong>:
        </p>
        <ul className="main-text star-list">
          <li>работа с массивами данных;</li>
          <li>поиск и сопоставление персон по заданным правилам;</li>
          <li>вычисление результата слияния на основе игровых условий.</li>
        </ul>
        <p>
          Особое внимание уделено <strong>разделению логики и UI</strong>:
          вычисления слияний вынесены отдельно от отображения, что упрощает
          поддержку и расширение функциональности.{" "}
          <strong>Препроцессор Sass</strong> используется для организации стилей
          и воспроизведения визуального языка игры, а для улучшения читаемости
          классы названы по методологии <strong>BEM</strong>.
        </p>
        <p>
          Несмотря на небольшой масштаб, проект затрагивает базовые принципы,
          важные для frontend-разработки: работу с данными, состояние
          интерфейса, пользовательские сценарии и аккуратную структуру кода.
        </p>
      </>
    ),
    cover: "/portfolio/covers/persona_cover.webp",
    gallery: [
      {
        id: 1,
        main: "/portfolio/main/persona_1.webp",
        thumb: "/portfolio/thumb/persona_1.webp",
        main_mob: "/portfolio/mobile/persona_1.webp",
        full: "/portfolio/fullscreen/persona_1.webp",
      },
      {
        id: 2,
        main: "/portfolio/main/persona_2.webp",
        thumb: "/portfolio/thumb/persona_2.webp",
        main_mob: "/portfolio/mobile/persona_2.webp",
        full: "/portfolio/fullscreen/persona_2.webp",
      },
      {
        id: 3,
        main: "/portfolio/main/persona_5.webp",
        thumb: "/portfolio/thumb/persona_5.webp",
        main_mob: "/portfolio/mobile/persona_5.webp",
        full: "/portfolio/fullscreen/persona_5.webp",
      },
      {
        id: 4,
        main: "/portfolio/main/persona_6.webp",
        thumb: "/portfolio/thumb/persona_6.webp",
        main_mob: "/portfolio/mobile/persona_6.webp",
        full: "/portfolio/fullscreen/persona_6.webp",
      },
      {
        id: 5,
        main: "/portfolio/main/persona_3.webp",
        thumb: "/portfolio/thumb/persona_3.webp",
        main_mob: "/portfolio/mobile/persona_3.webp",
        full: "/portfolio/fullscreen/persona_3.webp",
      },
      {
        id: 2,
        main: "/portfolio/main/persona_4.webp",
        thumb: "/portfolio/thumb/persona_4.webp",
        main_mob: "/portfolio/mobile/persona_4.webp",
        full: "/portfolio/fullscreen/persona_4.webp",
      },
    ],
  },
];

const steps = [
  ["ШАГ 1", "Оставляете заявку", "Расскажите о вашем товаре и задачах."],
  ["ШАГ 2", "Получаете расчёт", "Подбираем услуги и рассчитываем стоимость."],
  ["ШАГ 3", "Заключаем договор", "Согласовываем условия сотрудничества."],
  ["ШАГ 4", "Принимаем товар", "Проверяем поставку и размещаем товар."],
  ["ШАГ 5", "Автоматизация", "Настраиваем процессы и учёт заказов."],
  ["ШАГ 6", "Отгружаем", "Собираем и готовим заказы к отправке."],
  ["ШАГ 7", "Поддержка", "Остаёмся на связи и помогаем с вопросами."],
];

const services = [
  ["Приёмка и сортировка", "Проверяем поставки, количество и состояние товара."],
  ["Проверка качества", "Контролируем внешний вид и комплектацию продукции."],
  ["Автоматизированная упаковка", "Подбираем упаковку под особенности вашего товара."],
  ["Сборка заказов", "Комплектуем товары и готовим заказы к отправке."],
  ["Отгрузка на маркетплейсы", "Подготавливаем поставки по требованиям площадок."],
  ["Хранение товаров", "Размещаем продукцию и следим за складскими остатками."],
  ["Интеграции", "Помогаем связать складские процессы с вашими системами."],
];

const benefits = [
  ["Скорость", "До 20 000 товаров в смену и оперативная обработка заказов."],
  ["Точность", "Контроль операций и внимательная работа с каждой поставкой."],
  ["Надёжность", "Понятные процессы и ответственное хранение продукции."],
  ["Поддержка", "Персональный менеджер и помощь на каждом этапе."],
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Шапка сайта */}
      <header className="sticky top-0 z-20 border-b border-slate-100 bg-white">
        <div className="mx-auto flex min-h-[58px] max-w-[1120px] items-center justify-between px-5">
          <a href="#home" className="text-[19px] font-extrabold tracking-tight text-[#1b2e5b]">BOXPACK</a>
          <nav aria-label="Основная навигация" className="hidden items-center gap-6 text-[12px] font-medium text-slate-700 md:flex">
            <a className="hover:text-cyan-600" href="#steps">Услуги</a>
            <a className="hover:text-cyan-600" href="#steps">Как это работает</a>
            <a className="hover:text-cyan-600" href="#video">Видеопрезентация</a>
            <a className="hover:text-cyan-600" href="#calculator">Калькулятор</a>
            <a className="hover:text-cyan-600" href="#services">Кейсы</a>
            <a className="hover:text-cyan-600" href="#contacts">Контакты</a>
          </nav>
          <a href="#contacts" className="rounded-md bg-[#1b2e5b] px-3 py-2 text-[11px] font-semibold text-white transition hover:bg-[#263f78] md:hidden">Связаться</a>
        </div>
      </header>

      {/* Первый экран */}
      <section id="home" className="bg-[#1b2e5b] text-white">
        <div className="mx-auto grid max-w-[1120px] items-center gap-8 px-5 py-12 md:grid-cols-[1.05fr_.95fr] md:py-[72px]">
          <div>
            <p className="mb-3 text-[9px] font-semibold uppercase tracking-[.22em] text-blue-200">Автоматизированный фулфилмент</p>
            <h1 className="max-w-[510px] text-[34px] font-bold leading-[1.08] tracking-[-.035em] sm:text-[42px]">
              Фулфилмент,<br />который держит<br />сроки и репутацию
            </h1>
            <p className="mt-4 max-w-[430px] text-[12px] leading-[1.7] text-blue-100">
              Автоматизируем упаковку, маркировку каждого заказа и отправку на маркетплейсы. Мы берём на себя хранение, сборку, маркировку и логистику.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a href="#services" className="text-[11px] font-semibold text-white underline underline-offset-4">Рассчитать стоимость <span className="ml-2">→</span></a>
              <a href="#contacts" className="rounded-md bg-white px-4 py-3 text-[10px] font-bold text-[#1b2e5b] shadow-sm transition hover:bg-cyan-50">Получить консультацию</a>
            </div>
            <div className="mt-8 grid max-w-[470px] grid-cols-3 gap-2">
              <div className="rounded-md bg-white/10 p-3"><div className="text-[17px] font-bold">5000+</div><div className="mt-1 text-[8px] leading-3 text-blue-100">заказов в день</div></div>
              <div className="rounded-md bg-white/10 p-3"><div className="text-[17px] font-bold">99,8%</div><div className="mt-1 text-[8px] leading-3 text-blue-100">точность сборки</div></div>
              <div className="rounded-md bg-white/10 p-3"><div className="text-[17px] font-bold">FBO/FBS</div><div className="mt-1 text-[8px] leading-3 text-blue-100">все форматы работы</div></div>
            </div>
          </div>
          <div id="video" className="flex min-h-[220px] items-center justify-center rounded-lg bg-[#d1d5df] p-5 text-center text-[10px] text-slate-600 md:min-h-[285px]">
            <div><div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-lg text-[#1b2e5b]">▶</div>Здесь может находиться ваше видео</div>
          </div>
        </div>
      </section>

      {/* Как начать работать с нами */}
      <section id="steps" className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-[1000px] px-5">
          <div className="text-center">
            <h2 className="text-[22px] font-bold tracking-tight">Как начать работать с нами</h2>
            <p className="mx-auto mt-2 max-w-[520px] text-[11px] leading-5 text-slate-500">Подключение занимает несколько дней. Все процессы максимально автоматизированы.</p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([label, title, description]) => (
              <article key={label} className="min-h-[118px] rounded-lg border border-slate-100 bg-[#f1f1f1] p-4 shadow-[0_2px_4px_rgba(0,0,0,.10)]">
                <p className="text-[9px] font-bold uppercase tracking-wide text-[#1b2e5b]">{label}</p>
                <h3 className="mt-2 text-[12px] font-bold">{title}</h3>
                <p className="mt-1 text-[9px] leading-4 text-slate-500">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Услуги фулфилмента */}
      <section id="services" className="bg-[#f7f7f7] py-14 md:py-16">
        <div className="mx-auto max-w-[1000px] px-5">
          <div className="text-center">
            <h2 className="text-[22px] font-bold tracking-tight">Услуги фулфилмента</h2>
            <p className="mt-2 text-[11px] text-slate-500">Полный цикл обработки товаров от приёмки до доставки</p>
          </div>
          <div className="mx-auto mt-8 grid max-w-[850px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(([title, description]) => (
              <article key={title} className="min-h-[112px] rounded-lg border-t-[3px] border-cyan-500 bg-white p-4 shadow-sm">
                <h3 className="text-[12px] font-bold">{title}</h3>
                <p className="mt-2 text-[9px] leading-4 text-slate-500">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Почему выбирают BOXPACK */}
      <section className="bg-[#1b2e5b] py-12 text-white">
        <div className="mx-auto max-w-[1000px] px-5">
          <h2 className="text-center text-[20px] font-bold">Почему выбирают BOXPACK</h2>
          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(([title, description]) => (
              <article key={title} className="min-h-[105px] rounded-md bg-white/10 p-4">
                <h3 className="text-[12px] font-bold">{title}</h3>
                <p className="mt-2 text-[9px] leading-4 text-blue-100">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contacts" className="bg-white py-14">
        <div className="mx-auto max-w-[1000px] px-5 text-center">
          <h2 className="text-[20px] font-bold">Обсудим ваш проект?</h2>
          <p className="mt-2 text-[11px] text-slate-500">Оставьте заявку — мы свяжемся с вами и ответим на вопросы.</p>
          <a href="mailto:info@boxpack.ru" className="mt-5 inline-flex rounded-md bg-[#1b2e5b] px-6 py-3 text-[11px] font-semibold text-white transition hover:bg-[#263f78]">Написать нам</a>
        </div>
      </section>
      <footer className="border-t border-slate-100 bg-white py-5">
        <div className="mx-auto flex max-w-[1000px] flex-col justify-between gap-2 px-5 text-[10px] text-slate-500 sm:flex-row">
          <span className="font-bold text-[#1b2e5b]">BOXPACK</span><span>Фулфилмент для маркетплейсов</span><span>© {new Date().getFullYear()} BOXPACK</span>
        </div>
      </footer>
    </main>
  );
}

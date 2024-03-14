const ContentSectionLayout = (props = {
  children: <></>,
  title: ""
}) =>
  <section className="bg-stone-300 dark:bg-stone-700 flex flex-col gap-2 p-4 rounded-lg">
    <header>
      <h3 className="dark:text-stone-100 text-2xl text-center font-bold underline uppercase">{props.title}</h3>
    </header>

    <div className="flex flex-col gap-4">
      {props.children}
    </div>
  </section>

export { ContentSectionLayout };
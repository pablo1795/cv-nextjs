import data from "@/libs/lenguaje/data-es.json";

const Header = () => {
  const ListProfessions = () => <div className="flex gap-2 flex-col items-center sm:items-end">
    {data.professions.map((profession, index) =>
      <h2 key={index} className="text-stone-700 dark:text-stone-300 xl:text-lg font-bold uppercase text-nowrap">{profession}</h2>
    )}
  </div>

  return (
    <header className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4 p-4">
      <h1 className="dark:text-stone-100 text-2xl md:text-4xl font-black uppercase text-center md:text-left">{data.titles.cv}</h1>
      
      <ListProfessions />
    </header>
  );
}

export { Header };

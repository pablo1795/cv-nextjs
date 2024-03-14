import data from "@/libs/lenguaje/data-es.json";
import { CardLayout3 } from "@/components";

const Footer = () => {
  const ListContacts = () => <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-4">
    {data.contact.map((dataContact, index) =>
      <CardLayout3
        key={index}
        description={dataContact.description}
        title={dataContact.title}
        url={dataContact.url}
      />
    )}
  </div>

  return (
    <footer className="w-full p-10">
      <header className="mb-10">
        <h3 className="dark:text-stone-100 text-2xl text-center font-bold underline uppercase">{data.titles.contact}</h3>
      </header>

      <ListContacts />
    </footer>
  );
}

export { Footer };

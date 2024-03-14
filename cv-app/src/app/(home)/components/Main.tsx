import Image from "next/image";
import Link from "next/link";
import data from "@/libs/lenguaje/data-es.json";
import foto1 from "../../../../public/foto1.jpeg";
import { CardLayout1, CardLayout2, ContentSectionLayout, Text } from "@/components";

const Main = () => {
  const ListWorkExperience = () => data.work_experience.map((work, index) =>
    <CardLayout1
      key={index}
      date={work.date}
      description={work.description}
      title={work.title}
      url={work.url}
    />
  )

  const ListEducations = () => data.education.map((dataEducation, index) =>
    <CardLayout2
      key={index}
      date={dataEducation.date}
      description={dataEducation.description}
      title={dataEducation.title}
    />
  )

  return (
    <main className="grid grid-cols-1 gap-2 md:gap-4">
      <section className="bg-stone-300 dark:bg-stone-700 grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <div className="flex justify-between print:items-center">
          <div>
            <p className="text-stone-900 dark:text-stone-100 font-bold text-2xl uppercase">{data.personal_info.full_name}</p>

            <div className="flex gap-2">
              <Text text={`${data.words.nationality}:`} />
              <Text text={data.personal_info.nationality} styles="font-semibold" />
            </div>

            <div className="flex gap-2">
              <Text text={`${data.words.email}:`} />
              <Link href={data.personal_info.email} target="_blank" className="text-sky-600 hover:text-sky-700 dark:hover:text-sky-500 hover:underline font-medium text-pretty print:text-stone-800">{data.personal_info.email}</Link>
            </div>

            <div className="hidden print:flex print:gap-2">
              <Text text={`${data.words.phone}:`} />
              <Link href={data.personal_info.phone} target="_blank" className="text-sky-600 hover:text-sky-700 dark:hover:text-sky-500 hover:underline font-medium text-pretty print:text-stone-800">{data.personal_info.phone}</Link>
            </div>

            <div className="flex gap-2">
              <Text text={`${data.words.linkedin}:`} />
              <Link href={data.personal_info.linkedinURL} target="_blank" className="text-sky-600 hover:text-sky-700 dark:hover:text-sky-500 hover:underline font-medium text-pretty print:text-stone-800">{data.personal_info.linkedin}</Link>
            </div>

            <div className="flex gap-2">
              <Text text={`${data.words.github}:`} />
              <Link href={data.personal_info.githubURL} target="_blank" className="text-sky-600 hover:text-sky-700 dark:hover:text-sky-500 hover:underline font-medium text-pretty print:text-stone-800">{data.personal_info.github}</Link>
            </div>
          </div>

          <figure className="hidden print:block rounded-xl overflow-hidden">
            <Image src={foto1} alt="foto perfil" height={160} width={160} />
          </figure>
        </div>

        <div>
          <Text text={data.personal_info.greeting1} styles="text-xl font-semibold" />
          <p className="text-stone-800 dark:text-stone-200 font-medium px-2 text-pretty">{data.personal_info.greeting2}</p>
        </div>
      </section>

      <ContentSectionLayout title={data.titles.experience}>
        <ListWorkExperience />
      </ContentSectionLayout>

      <ContentSectionLayout title={data.titles.studies}>
        <ListEducations />
      </ContentSectionLayout>
    </main>
  );
}

export { Main };

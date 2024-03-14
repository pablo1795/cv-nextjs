import { Text } from "@/components/common";
import Link from "next/link";

const CardLayout1 = (props = {
  date: "",
  description: "",
  title: "",
  url: ""
}) =>
  <article>
    <div className="flex justify-between items-center gap-2">
      <Text tag="h4" text={props.title} styles="text-lg font-semibold uppercase" />
      <Text tag="p" text={props.date} styles="text-stone-700 dark:text-stone-300 italic text-nowrap text-sm text-right" />
    </div>

    <Text text={props.description} />

    {props.url && <div className="flex gap-2">
      <Text tag="p" text="sitio web:" styles="text-stone-700 dark:text-stone-300 print:hidden" />
      <Link href={props.url} target="_blank" className="text-sky-600 hover:text-sky-700 dark:hover:text-sky-500 hover:underline font-medium print:hidden">{props.url}</Link>
    </div>}
  </article>

const CardLayout2 = (props = {
  date: "",
  description: "",
  title: "",
}) =>
  <article>
    <div className="flex justify-between items-center gap-2">
      <Text tag="h4" text={props.description} styles="text-lg font-semibold uppercase" />
      <Text tag="p" text={props.date} styles="text-stone-700 dark:text-stone-300 italic text-nowrap text-sm text-right" />
    </div>
    <Text tag="p" text={props.title} />
  </article>

const CardLayout3 = (props = {
  description: "",
  title: "",
  url: ""
}) =>
  <div className="flex justify-center items-center gap-2">
    <Text tag="h4" text={props.title} styles="text-lg capitalize" />
    <Link href={props.url} target="_blank" className="text-sky-600 hover:text-sky-700 dark:hover:text-sky-500 hover:underline text-lg font-bold text-pretty print:text-stone-800">{props.description}</Link>
  </div>

export { CardLayout1, CardLayout2, CardLayout3 };
"use client";

export default function ErrorPage({ error }: { error: Error }) {
  console.error(error);

  return <div>¡ERROR!</div>
}
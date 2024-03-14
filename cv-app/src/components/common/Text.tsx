interface TextProps {
  children?: React.ReactNode;
  disabled?: boolean;
  styles?: string;
  tag?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text: string;
}

export function Text({
  children,
  disabled = false,
  styles,
  tag = "p",
  text
}: TextProps) {
  const TextComponent = tag;
  const colorTextComponent = `${disabled ? "text-stone-500" : "text-stone-800 dark:text-stone-200"}`

  return (
    <TextComponent className={`${colorTextComponent} font-medium text-pretty ${styles}`}>
      {children || text}
    </TextComponent>
  );
}

export function TypographyH1({ msg, className }) {
  return (
    <h1
      className={
        "scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance " +
        className
      }
    >
      {msg}
    </h1>
  );
}

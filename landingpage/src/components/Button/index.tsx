interface ButtonProps {
  text: string;
  text_color: string;
  background_color: string;
  link: string;
}
export default function Button({
  text,
  text_color,
  background_color,
  link,
}: ButtonProps) {
  return (
  <>
    <a href=""> {link}
      <div className={`${background_color} rounded-none hidden md:block px-6 py-2.5`}>
        <p className={`${text_color}`}>{text}</p>
      </div>
    </a>
  </>
  )
}

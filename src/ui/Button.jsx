import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block text-sm  font-semibold tracking-wide uppercase transition-colors duration-500 bg-yellow-400 rounded-full text-stone-800 hover:bg-yellow-300 focus:outline-none focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " py-3 px-4 sm:px-6 sm:py-4",
    small: base + " py-2 px-3 md:px-5 sm:py-3 text-sm",
    secondary:
      "py-2.5 px-4 text-sm sm:px-6 sm:py-3.5 inline-block bg-stone-200 rounded-full border-stone-200 font-semibold tracking-wide uppercase transition-colors duration-500  rounded-full text-stone-800 hover:bg-stone-300 focus:outline-none focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed",
    round: base + "px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }
  if (onClick) {
    return (
      <button disabled={disabled} onClick={onClick} className={styles[type]}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;

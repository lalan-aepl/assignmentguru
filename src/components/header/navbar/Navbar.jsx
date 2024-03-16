import { nav } from "../../../data/nav";
import Services from "../../services/Services";
function Navbar() {
  function handleScroll(section) {
    let value = document.getElementById(section)
    console.log(value)
    if (value) {
      value.scrollIntoView({ behavior: "smooth", block: 'center', inline: 'center' })
    }

  }
  return (
    <nav>
      <ul className="flex sm:gap-4">
        {nav.map((item, idx) => {
          // destructure item
          const { href, name } = item;
          if (idx == 1) return (
            <Services key="services" />
          )
          else if (idx == 4)
            return (
              <li key={name}>

                <a
                  href='/blog'
                  className="text-black cursor-pointer hover:text-red-400  rounded-md font-Inter sm:text-base font-bold transition"
                // href={href}
                >
                  {name}
                </a>
              </li>
            );
          else
            return (
              <li key={name}>

                <a
                  onClick={() => handleScroll(href)}
                  className="text-black cursor-pointer hover:text-red-400  rounded-md font-Inter sm:text-base font-bold transition"
                // href={href}
                >
                  {name}
                </a>
              </li>
            );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;

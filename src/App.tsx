import { Heading } from "./components/Heading";

import "./styles/theme.css";
import "./styles/global.css";
import { TimerIcon } from "lucide-react";

export function App() {
  return (
    <>
      <Heading>
        Olá Mundo!
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor fugiat,
        velit deleniti laborum aliquid adipisci aliquam. Numquam odio
        perspiciatis illo, placeat quam quidem nam natus odit error dolore!
        Maxime, repellendus.
      </p>
    </>
  );
}

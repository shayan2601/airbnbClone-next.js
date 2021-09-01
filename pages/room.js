import Image from "next/image";
import { useStateValue } from "../store";

function Room() {
  //   const [{ card }, dispatch] = useStateValue();

  return (
    <div>
      <div className="relative h-32 w-40">
        {/* <Image objectFit="cover" layout="fill" src={card.img} /> */}
      </div>
      <div>{/* <h2>{scard.price}</h2> */}</div>
    </div>
  );
}

export default Room;

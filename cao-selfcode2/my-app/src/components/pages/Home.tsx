import axios from "axios";
import { useEffect, useState } from "react";
import { PetsList } from "../PetsList";

export const Home = () => {
  const [data, setData] = useState<any[]>([]);

  const getData = () => {
    axios
      .get("https://glittery-dull-snickerdoodle.glitch.me/v1/pets")
      .then((res) => setData(res.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getData();
  }, []);

  return <PetsList data={data} />;
};

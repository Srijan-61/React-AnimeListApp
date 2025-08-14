import { useState } from "react";
import "./animeList.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const AnimeApp = () => {
  const [animeList, setAnimeList] = useState([
    "Naruto",
    "one piece",
    "one punch man",
  ]);

  const [input, setInput] = useState("");

  const addAnime = () => {
    if (input.trim() !== "") {
      setAnimeList([...animeList, input]);
      setInput("");
      toast.success(`"${input}" Added to the list`);
    }
  };

  const removeAnime = (name: string) => {
    setAnimeList(animeList.filter((anime) => anime !== name));
    toast.success(`"${name}" Removed From List`, {
      className: "Toastify__toast--remove_success",
    });
  };

  return (
    <div className="container">
      <h2>My Anime List</h2>

      <input
        type="text"
        value={input}
        placeholder="Add new Anime"
        onChange={(event) => setInput(event.target.value)}
      />
      <button onClick={addAnime}>Add</button>

      <ol>
        {animeList.map((anime) => (
          <li key={anime}>
            {anime}
            <button onClick={() => removeAnime(anime)}>remove</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

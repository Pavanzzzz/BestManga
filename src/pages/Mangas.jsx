import { useEffect,useState }
from "react";

import MangaCard
from "../components/MangaCard";

import {
  getMangas,
  deleteManga
}
from "../services/app";

function Mangas(){

  const [mangas,setMangas]
  = useState([]);

  const [search,setSearch]
  = useState("");

  const fetchMangas =
  async ()=>{

    const res =
    await getMangas();

    setMangas(res.data);
  };

  useEffect(()=>{
    fetchMangas();
  },[]);

  const handleDelete =
  async(id)=>{

    if(
      !window.confirm(
        "Delete this manga?"
      )
    ) return;

    await deleteManga(id);

    fetchMangas();
  };

  const filtered =
  mangas.filter(m =>
    m.title
    .toLowerCase()
    .includes(
      search.toLowerCase()
    )
  );

  return (
    <div className="container">

      <h1>Browse Manga</h1>

      <input
        className="search"
        placeholder="Search Manga..."
        value={search}
        onChange={(e)=>
          setSearch(
            e.target.value
          )
        }
      />

      <div className="manga-grid">

        {filtered.map(manga=>(
          <MangaCard
            key={manga.id}
            manga={manga}
            onDelete={
              handleDelete
            }
          />
        ))}

      </div>

    </div>
  );
}

export default Mangas;
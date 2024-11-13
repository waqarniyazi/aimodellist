import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const ModelList = () => {
  const [models, setModels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "models"));
      setModels(querySnapshot.docs.map(doc => doc.data()));
    };
    fetchData();
  }, []);

  return (
    <div>
      {models.map((model, index) => (
        <div key={index}>
          <h2>{model.name}</h2>
          <p>{model.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ModelList;


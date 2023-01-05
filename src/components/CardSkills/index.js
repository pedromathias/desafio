import axios from "axios";
import localStorage from "local-storage";
import { useEffect, useState } from "react";
import { Container } from "./style";

export const CardSkills = ({ name, image, id }) => {
  const [userId, setUserId] = useState(null);
  const [userSkill, setUserSkill] = useState();

  const [reload, setReload] = useState(false);

  const getCurrentDate = () => {
    const date = new Date().toJSON().slice(0, 10);
    return date;
  };

  const handleUserId = async () => {
    const a = await localStorage.getItem("id");
    setUserId(a);
  };

    useEffect(() => {
      handleUserId();
    });

  const Postskilluser = {
    knowledgeLevel: 0,
    user: userId,
    createdAt: getCurrentDate(),
    skill: id,
  };
  const baseUrl = "http://107.178.219.190:8080";

  const postUserSkill = async () => {
    try {
      const response = await axios.post(
        `${baseUrl}/api/userSkills`,
        Postskilluser
      );
    } catch (err) {
      console.log(err);
      console.log(Postskilluser);

      alert(
        "Não foi possível selecionar a categoria, tente novamenta mais tarde."
      );
    }
  };

  return (
    <Container onClick={postUserSkill}>
      <img src={image} />
      <p>{name}</p>
    </Container>
  );
};

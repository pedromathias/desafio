import { useEffect, useState } from "react";
import { CardUserSkill } from "../../components/CardUserSkills";
import { Header } from "../../components/Header";
import { ModalSkills } from "../../components/ModalSkills";
import { getSkills } from "../../services/apiSkills";
import { deleteByIdUserSkills, getUserSkills } from "../../services/apiUserSkills";
import { Container, Content } from "./style";

export function Home() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [userSkillsData, setUserSkillsData] = useState([]);
  const [reload, setReload] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const deleteUserSkill = async (id) => {
    await deleteByIdUserSkills(id)
    alert("vasco da gama");
    setReload(!reload);
  };

  useEffect(() => {
    get();
  }, [reload]);

  const get = async () => {
    const id = await localStorage.getItem("id");
    const response = await getUserSkills();
    const res = await getSkills();
    let idUserSkill = res.data.filter((idUsKill) => idUsKill.id);
    if (response.data !== "") {
      let filterUserSkills = response.data.filter(
        (userSkill) => userSkill.user === id
      );
      let array = [];
      for (let i = 0; i < filterUserSkills.length; i++) {
        for (let j = 0; j < res.data.length; j++) {
          if (filterUserSkills[i].skill === res.data[j].id) {
            array.push(res.data[j]);
          }
        }
      }

      setUserSkillsData(array);
      console.log(array);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <button onClick={openModal}>Adicionar Skill</button>
        {userSkillsData.map((item) => (
          <CardUserSkill 
          name={item.name}
          description={item.description}
          id={item.id}
          version={item.version}
          deleteUserSkill={deleteUserSkill}
          />
        ))}
        <ModalSkills modalIsOpen={modalIsOpen} closeModal={closeModal} />
      </Container>
    </>
  );
}

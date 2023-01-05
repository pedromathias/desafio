import localStorage from "local-storage";
import { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import { useNavigation } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import { getSkills } from "../../services/apiSkills";
import { CardSkills } from "../CardSkills";
import { Content } from "./style";

export const ModalSkills = ({ modalIsOpen, closeModal }) => {

    Modal.setAppElement('#root')

  const [skillsData, setSkillsData] = useState();

  const { auth } = useContext(AuthContext);
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigation()

  const LogOut = () => {
    localStorage.clear();
    setAuth(false);
    navigate("/")
  };

  useEffect(() => {
    get();
  }, []);

  const get = async () => {
    const response = await getSkills();
    if (response.data !== "") {
      setSkillsData(response.data);
    }
  };
  return (
    <Modal
    
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={{
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
      }}
    >
        <div>
            <button onClick={LogOut} >Sair</button>
      {/* {skillsData.map((item) => (
        <Content key={item.id}>
          <CardSkills id={item.id} name={item.name} image={item.imageUrl} />
        
          </Content>
          
        )
      )} */}
      </div>
    </Modal>
  );
};

import axios from "axios";
import { useState, useContext } from "react";
import { Header } from "../../components/Header";
import { AuthContext } from "../../context/auth";
import { Container, Content } from "./style";

export function Cadastro() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { auth } = useContext(AuthContext);
  const { setAuth } = useContext(AuthContext);

  const baseUrl = "http://107.178.219.190:8080";

  const onChangeLoginHandler = (login) => {
    setLogin(login);
  };

  const onChangePasswordHandler = (password) => {
    setPassword(password);
  };

  const onChangePasswordConfirmHandler = (passwordConfirm) => {
    setPasswordConfirm(passwordConfirm);
  };

  const onSubmitFormHandler = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${baseUrl}/api/users`, {
        login,
        password,
      });
      if (response.status === 201) {
        alert(` You have created: ${JSON.stringify(response.data)}`);
        setIsLoading(false);
        setLogin("");
        setPassword("");
        setPasswordConfirm("");
        setAuth(true);
      }
      await localStorage.setItem("id", JSON.stringify(response.data));
      const id = await localStorage.getItem("id");
      console.log(id);
    } catch (error) {
      alert("An error has occurred");
      setIsLoading(false);
    }
  };

  const CriarConta = () => {
    if (
      password === passwordConfirm
        ? onSubmitFormHandler()
        : alert("As senhas não coincidem")
    ) {
    }
  };

  return (
    <Container>
      <Header />
      <Content>
        <p>Insira seu email:</p>
        <input onChange={onChangeLoginHandler} className="inputbox" />
        <p style={{ marginTop: "30px" }}>Insira sua senha:</p>
        <input onChange={onChangePasswordHandler} />
        <p style={{ marginTop: "30px" }}>Confirme sua senha:</p>
        <input onChange={onChangePasswordConfirmHandler} />
        <button onClick={CriarConta} style={{ marginTop: "30px" }}>
          Cadastrar
        </button>
      </Content>
    </Container>
  );
}

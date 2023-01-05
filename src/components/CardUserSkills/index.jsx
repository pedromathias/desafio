import { Container } from "./style";

export const CardUserSkill = ({
  name,
  version,
  description,
  imageUrl,
  deleteUserSkill,
  id,
}) => {
  return (
    <Container>
      <div
        style={{ marginLeft: 15, justifyContent: "center", marginRight: 40 }}
      >
        <img style={{ height: 80, width: 80 }} src={imageUrl} />
      </div>
      <div
        style={{ justifyContent: "center", alignContent: "center", width: 150 }}
      >
        <p style={{ color: "white", marginBottom: 8 }}>{name}</p>
        <p style={{ color: "white", marginBottom: 8 }}>Version: {version}</p>
        <p style={{ color: "white" }}>{description}</p>
      </div>
      <div>
        <button onClick={() => deleteUserSkill(id)}>Deletar</button>
      </div>
    </Container>
  );
};

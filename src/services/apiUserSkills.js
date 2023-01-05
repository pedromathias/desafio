import axios from "axios";

const apiUserSkills = axios.create({
  baseURL: " http://107.178.219.190:8080/api",
});

export function getUserSkills() {
  let url = `/userSkills`;

  return apiUserSkills.get(url);
}

export function getByIdUserSkills(id ) {
    let url = `/userSkills/${id}`;

  return apiUserSkills.get(url);
}

export function deleteByIdUserSkills(id) {
    let url = `/userSkills/${id}`;

    console.log(id);
  return apiUserSkills.delete(url);
  
  
}

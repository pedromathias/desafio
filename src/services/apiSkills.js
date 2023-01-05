import axios from "axios";

const apiSkills = axios.create({
  baseURL: " http://107.178.219.190:8080/api",
});

export function getSkills() {
  let url = `/skills`;

  return apiSkills.get(url);
}

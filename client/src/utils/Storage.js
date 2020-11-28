export function setName() {
  let name = null;
  try {
    name = JSON.parse(localStorage.setName("name")) || [];
  } catch (error) {
    console.log(error);
    name = [];
  }
  return name;
}

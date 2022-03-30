export async function getPersonService() {
  try {
    const response = await fetch("http://localhost:3000/employee");
    return await response.json();
  } catch (err) {
    console.log("error", err);
  }
}

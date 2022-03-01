export default function City(props) {


  return (
    <select value={props.city} name="City" onChange={(e) => props.setCity(e.target.value)}>
      <option value="Europe/Zurich">Zurich</option>
      <option value="Europe/Istanbul">Istanbul</option>
      <option value="America/New_york">New York</option>
    </select>
  );
}

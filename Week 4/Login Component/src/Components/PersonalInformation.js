import "./PersonalInformation.css"

const PersonalInformation = ({ data }) => {
  return (
    <div>
      {/* When data is submitted, we display our information on the screen. */}
      {data.isFormSubmitted && (
        <div className="board">
          <h2>Your Information</h2>
          <ul>
            <li>Username : {data.username}</li>
            <li>Email : {data.email}</li>
            <li>Password : {data.passw___ord}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default PersonalInformation;

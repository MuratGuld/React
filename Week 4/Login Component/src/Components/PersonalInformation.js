import "./PersonalInformation.css"

const PersonalInformation = ({ data }) => {
  return (
    <div>
      {data.isFormSubmitted && (
        <div className="board">
          <h2>Your Information</h2>
          <ul>
            <li>Username : {data.username}</li>
            <li>Email : {data.email}</li>
            <li>Password : {data.password}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default PersonalInformation;

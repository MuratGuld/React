import "./Form.css";

const Form = ({ setData, data }) => {
  const handleSubmit = (e) => {
    // At first w check if the password and repeated password is same.
    if (e.target.password.value !== e.target.repeatedPassword.value) {
      e.preventDefault();
      alert("Entered password values do not match!");
    } else {
      // After we get the information, we empty the inputs
      e.preventDefault();
      e.target.username.value = "";
      e.target.email.value = "";
      e.target.password.value = "";
      e.target.repeatedPassword.value = "";
      // When the form is submitted, it takes the value of true and the data is displayed on the screen with this data.
      setData({ ...data, isFormSubmitted: true });
    }
  };

  return (
    <form action="" type="submit" onSubmit={handleSubmit}>
      <h1>SIGN UP</h1>
      <input
        name="username"
        type="text"
        placeholder="Username"
        required
        // Our data is updated in onChange event.
        onChange={(e) =>
          setData({ ...data, username: e.target.value, isFormSubmitted: false })
        }
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        // Our data is updated in onChange event.
        onChange={(e) =>
          setData({ ...data, email: e.target.value, isFormSubmitted: false })
        }
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        required
        // Our data is updated in onChange event.
        onChange={(e) =>
          setData({ ...data, password: e.target.value, isFormSubmitted: false })
        }
      />
      <input
        name="repeatedPassword"
        type="password"
        placeholder="Password repeat"
        required
        // Our data is updated in onChange event.
        onChange={(e) =>
          setData({
            ...data,
            repeatedPassword: e.target.value,
            isFormSubmitted: false,
          })
        }
      />
      <button type="submit">SIGN UP</button>
    </form>
  );
};

export default Form;

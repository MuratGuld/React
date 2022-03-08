import "./Form.css"

const Form = ({ setData, data }) => {
  const handleSubmit = (e) => {
    if (e.target.password.value !== e.target.repeatedPassword.value) {
      e.preventDefault();
      alert("Entered password values do not match!");
    } else {
      e.preventDefault();
      e.target.username.value = "";
      e.target.email.value = "";
      e.target.password.value = "";
      e.target.repeatedPassword.value = "";
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
        onChange={(e) =>
          setData({ ...data, username: e.target.value, isFormSubmitted: false })
        }
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        onChange={(e) =>
          setData({ ...data, email: e.target.value, isFormSubmitted: false })
        }
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        required
        onChange={(e) =>
          setData({ ...data, password: e.target.value, isFormSubmitted: false })
        }
      />
      <input
        name="repeatedPassword"
        type="password"
        placeholder="Password repeat"
        required
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

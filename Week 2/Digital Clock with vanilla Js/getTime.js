const getTime = () => {
  // We create a Date Object
  const dateTime = new Date();

  // We get the current time information
  const hour = dateTime.getHours();
  const minute = dateTime.getMinutes();
  const second = dateTime.getSeconds();

  console.log(hour, ":", minute, ":", second);
};

module.exports = getTime
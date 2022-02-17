// Card component
const Card = () => {
  return (
    <div class="card col-3 p-0 m-1">
      <img
        src="https://dummyimage.com/600x400/55595c/fff"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;

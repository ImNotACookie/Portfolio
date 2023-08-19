function Card(props) {
  return (
    <div className="card">
      <img src={props.icon} alt="icon" />
      <a href={props.link} target="_blank">
        {props.platform}
      </a>
    </div>
  );
}

export default Card;

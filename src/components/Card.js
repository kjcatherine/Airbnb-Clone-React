export default function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = 'SOLDOUT';
  } else if (props.item.location === 'Online') {
    badgeText = 'ONLINE';
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={props.item.coverImg} className="card--image" />
      <div className="card--stats">
        <img src="/star1.png" className="card--star" />
        <span>{props.item.stats.rating}</span>
        <span className="gray">({props.item.stats.reviewCount}) • </span>
        <span className="gray">{props.item.location}</span>
      </div>
      <p className="card--title">{props.item.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.item.price}</span> / person
      </p>
    </div>
  );
}

//if we were using a spread syntax {...item}, then we need to remove items because this directly reads the individual keys.

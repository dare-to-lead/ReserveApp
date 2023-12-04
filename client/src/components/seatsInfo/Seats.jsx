import seatImage from "../../assets/seat.png";
const Seat = ({ onClick, bg }) => {
  // console.log("item", item)

  return (
    <div>
      <img
        alt="busSeat"
        id="li"
        onClick={onClick}
        src={seatImage}
        className="border border-1 text-center rounded w-75 "
        style={{
          backgroundColor: bg,
        }}
      />
    </div>
  );
};

export default Seat;

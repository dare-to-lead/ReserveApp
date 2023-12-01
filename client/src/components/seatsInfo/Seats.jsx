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
        className="border border-1 text-center rounded"
        style={{
          width: "55px",
          backgroundColor: bg,
        }}
      />
    </div>
  );
};

export default Seat;

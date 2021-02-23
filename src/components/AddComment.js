import "./AddComments.css";
import RatingStars from "./RatingStars";
const AddComments = () => {
  return (
    <div className="Input_box">
      <form className="Input_form">
        <label>Oceń i skomentuj</label>
        <RatingStars />
        <textarea></textarea>
        <input className="Input_submit" type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default AddComments;

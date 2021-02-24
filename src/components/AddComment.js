import "./AddComments.css";
import RatingStars from "./RatingStars";
const AddComments = () => {
  return (
    <div className="Input_box">
      <form className="Input_form">
        <h3>Oceń i skomentuj</h3>
        <RatingStars />
        <textarea></textarea>
        <input className="Input_submit" type="submit" value="Dodaj"></input>
      </form>
    </div>
  );
};

export default AddComments;

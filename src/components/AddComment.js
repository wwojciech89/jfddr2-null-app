import "./AddComments.css";
const AddComments = () => {
  return (
    <div className="Input_box">
      <form className="Input_form">
        <label>Oceń i skomentuj</label>
        <input type="text"></input>
        <input className="Input_submit" type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default AddComments;

import "./AddComments.css";
const AddComments = () => {
  return (
    <div className="Input_box">
      <from className="Input_form">
        <label>Oceń i skomentuj</label>
        <input type="text"></input>
        <input type="submit" value="Submit"></input>
      </from>
    </div>
  );
};

export default AddComments;

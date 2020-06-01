import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, postSmurfs} from '../actions';
import SmurfCard from "./SmurfCard";

const SmurfList = props => {
  
  const [Smurf, setSmurf] = useState({name:"", age:"", height:""});

  const fetchSmurfs = e => {
    e.preventDefault();
    props.getSmurfs();
  };

  const addSmurfs = e => {
    e.preventDefault();
    props.postSmurfs(Smurf);
  };

  const handleCHanges = e=>{
    const newSmurf = {
      ...Smurf,
      [e.target.name]: e.target.value
    }; 
    setSmurf(newSmurf); // update state with new data
    console.log("new smurf: ", newSmurf);
  };

  return (
    <>
      <h2>Smurf Village!</h2>
      {props.isFetching && <p>Fetching Smurfs!</p>}
      <div>
        {props.Smurfs.map((smurf)=>(
            <SmurfCard key={smurf.id} smurf = {smurf} />
        ))}
      </div>
      {props.error && <p className="error">{props.error}</p>}
      <button onClick={fetchSmurfs}>Fetch Smurf Village!</button>

      <input type="text" name="name" placeholder="Smurf Name" value = {Smurf.name} onChange={handleCHanges}/>  
      <input type="text" name="age" placeholder="Smurf Age" value = {Smurf.age} onChange={handleCHanges}/>  
      <input type="text" name="height" placeholder="Smurf Height" value = {Smurf.height} onChange={handleCHanges}/>  
      <button onClick={addSmurfs} >Add Smurf!</button>

    </>
  );
};

const mapStateToProps = state => ({
  Smurfs: state.Smurfs,
  error: state.error,
  isFetching: state.isFetching
});

export default connect(
  mapStateToProps,
  { getSmurfs, postSmurfs }
)(SmurfList);



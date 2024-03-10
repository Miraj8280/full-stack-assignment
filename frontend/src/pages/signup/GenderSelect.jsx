const GenderSelect = () => {
    return (
      <div className="flex">
        <div className="form-control">
          <label className="label gap-2 cursor-pointer">
            <span className="label-text">Male</span>
            <input type="radio" name="radio-4" className="radio radio-accent" checked />
          </label>
        </div>
        <div className="form-control">
          <label className="label gap-2 cursor-pointer">
            <span className="label-text">Female</span>
            <input type="radio" name="radio-4" className="radio radio-accent" />
          </label>
        </div>
      </div>
    );
  };
  
  export default GenderSelect;
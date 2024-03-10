const GenderSelect = ({ onGenderSelect, selectedGender }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text">Male</span>
          <input
            type="radio"
            name="radio-4"
            className="radio radio-sm radio-accent"
            checked={selectedGender === "male"}
            onChange={() => onGenderSelect("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text">Female</span>
          <input
            type="radio"
            name="radio-4"
            className="radio radio-sm radio-accent"
            checked={selectedGender === "female"}
            onChange={() => onGenderSelect("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderSelect;

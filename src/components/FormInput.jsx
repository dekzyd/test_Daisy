const FormInput = ({ label, name, type, defaultValue }) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text font-semibold">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className="input input-bordered"
      />
    </div>
  );
};

export default FormInput;

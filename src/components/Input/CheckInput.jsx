function CheckInput({ name, checked, onChange, title }) {
  return (
    <div className="flex items-center gap-3 my-4">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="w-6 h-6"
      />
      <p>{title}</p>
    </div>
  );
}
export default CheckInput;

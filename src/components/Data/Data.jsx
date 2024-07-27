function Data({ name, text, className }) {
  return (
    <div className={`mt-3 mx-1 ${className}`}>
      <span className="font-bold text-Main">{name} : </span>
      <span className="flex-1 text-[#ADD8E6]">{text}</span>
    </div>
  );
}
export default Data;

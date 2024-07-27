function Statistics({ Icon, name, number }) {
  return (
    <div>
      <div className="bg-Third rounded-md py-4 px-2 max-sm:py-2 flex justify-between items-center gap-2 text-[14px] max-sm:text-[10px]">
        <div>
          <p className="text-gray-100 font-semibold">{name}</p>
          <p className="text-gray-200 font-bold">{number}</p>
        </div>
        <div className="bg-gradient-to-bl from-[#536CE5] to-gray-100 rounded-full p-1">
          <Icon className="text-white w-[25px] h-[25px] max-sm:w-[20px] max-sm:h-[20px]" />
        </div>
      </div>
    </div>
  );
}
export default Statistics;

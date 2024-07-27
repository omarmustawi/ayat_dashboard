import Delete from "../Operation/Delete";
import Update from "../Operation/Update";

const Table = ({
  thead,
  tbody,
  tData,
  show,
  funDelete,
  pageCount,
  edit,
  hide,
  showContent,
  isLoading,
}) => {
  return (
    <div className="bg-Third shadow-sm rounded-2xl mx-auto">
      <div className="mx-auto w-full overflow-x-auto h-full">
        <table className="w-full mx-auto border overflow-hidden rounded-2xl h-full">
          <thead className="w-full text-center text-white bg-Secondary">
            <tr>
              {thead?.map((e, i) => (
                <td key={i} className="py-3 px-5 text-sm font-semibold">
                  {e}
                </td>
              ))}
              <td className={`${hide ? "hidden" : "max-sm:p-5 w-fit"}`}>
                العمليات
              </td>
            </tr>
          </thead>
          <tbody className="text-white text-center">
            {tData &&
              tData.map((e, i) => (
                <tr key={i}>
                  {tbody.map((name, j) => (
                    <td key={j} className="py-1 px-2 border border-Secondary">
                      {typeof e[name] === "string" &&
                      e[name].substring(0, 4) === "http" ? (
                        <img
                          src={e[name]}
                          alt=""
                          className="w-14 h-14 rounded-full mx-auto cursor-pointer"
                        />
                      ) : e[name] ? 
                      name === "Open_Registration" ?
                      (
                        <div>{ new Date(e[name]).getFullYear() } </div>
                      ) : (
                        <div>{e[name]} </div>
                      ) : ("___")}
                    </td>
                  ))}
                  <td
                    className={`${
                      hide
                        ? "hidden"
                        : "cursor-pointer relative border border-Secondary"
                    }`}
                  >
                    <div className="flex justify-center items-center gap-3">
                      {edit && <Update edit={`/${edit}/${e.ID_Employee || e.id || e.ID_Scholarships || e.ID_Specialization || e.ID_Certificate_Sources }`} />}
                      {/* {edit && <Update edit={`/${edit}/${id}`} />} */}
                      {funDelete && <Delete deleteClick={() => funDelete(e)} />}
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;

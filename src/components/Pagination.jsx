/* eslint-disable react/prop-types */
function Pagination({
  perPagePosts,
  totalPost,
  setpageNumber,
  setPerPagePosts,
  pageNumber,
}) {
  const btns = Object.keys([...Array(Math.ceil(totalPost / perPagePosts))]);
  return (
    <div className="text-white w-[500px] gap-6 flex mx-auto my-8 flex-wrap">
      <select
        onChange={(e) => setPerPagePosts(parseInt(e.target.value))}
        className="ring rounded-md shadow-sm text-black px-5"
      >
        <option value="10">10</option>
        <option value="5">5</option>
        <option value="15">15</option>
      </select>
      {btns.map((btn, i) => {
        console.log(
          pageNumber,
          parseInt(btn) + 1,
          " = ",
          pageNumber === parseInt(btn) + 1
        );
        return (
          <button
            className={pageNumber == parseInt(btn) + 1 ? "bg-red-500" : ""}
            onClick={() => setpageNumber(btn)}
            key={i}
          >
            {++btn}
          </button>
        );
      })}
    </div>
  );
}

export default Pagination;

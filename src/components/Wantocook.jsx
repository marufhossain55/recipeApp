import Currentlycooking from './Currentlycooking';

const Wantocook = ({ tableData, tableDataDeleteFunction, currentCooks }) => {
  return (
    <div>
      <div className=' mb-40'>
        <h3 className='text-xl font-semibold border-b-2 mx-20 pb-6'>
          Want to cock: {tableData.length}
        </h3>
        <table className='table-auto mx-auto mt-6 space-x-96'>
          <thead>
            <tr className=''>
              <th className='px-4 py-2'></th>
              <th className='px-4 py-2'>Name</th>
              <th className='px-4 py-2'>Time</th>
              <th className='px-4 py-2'>calories</th>
            </tr>
          </thead>
          <tbody className='bg-[#2828280e]  border'>
            {tableData.map((tdata, idx) => {
              return (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{tdata.recipe_name}</td>
                  <td>
                    <div>{tdata.preparing_time}</div>
                  </td>
                  <td>{tdata.calories}</td>
                  <td>
                    <button
                      onClick={() => tableDataDeleteFunction(tdata)}
                      className='btn bg-green-400 rounded-3xl'
                    >
                      Preparing
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Currentlycooking currentCooks={currentCooks}></Currentlycooking>
    </div>
  );
};
export default Wantocook;

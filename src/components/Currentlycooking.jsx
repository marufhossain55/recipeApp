const Currentlycooking = ({ currentCooks }) => {
  return (
    <div>
      <div className='h-[15%]'>
        <h3 className='text-xl font-semibold border-b-2 mx-20 pb-6'>
          Currently Cooking: {currentCooks.length}
        </h3>
        <table className='table-auto mx-auto mt-6 '>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>calories</th>
            </tr>
          </thead>
          <tbody>
            {currentCooks.map((tdata, idx) => {
              return (
                <tr key={idx} className='bg-[#2828280e]  border'>
                  <td>{idx + 1}</td>
                  <td className='px-4 py-2'>{tdata.recipe_name}</td>
                  <td className='px-4 py-2'>{tdata.preparing_time}</td>
                  <td className='px-4 py-2'>{tdata.calories}</td>
                </tr>
              );
            })}

            <tr>
              <td></td>
              <td></td>
              <td className='px-4 py-2'>
                Total Time: <br />
                {currentCooks.reduce(
                  (prev, curr) => prev + curr.preparing_time,
                  0
                )}
              </td>
              <td className='px-4 py-2'>
                Total Calories: <br />
                {currentCooks.reduce((prev, curr) => prev + curr.calories, 0)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Currentlycooking;

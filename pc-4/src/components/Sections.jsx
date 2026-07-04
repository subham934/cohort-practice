import React, { useContext } from 'react';
import { PostDataContext } from '../context/PostContext';

const Sections = ({children}) => {
  const data = useContext(PostDataContext);
  console.log(data);

  return (
    <div className="h-[90vh] text-black bg-zinc-600 flex flex-col justify-center items-center">
      <h1 className="text-3xl text-amber-400 -mt-70">All Section</h1>
      {children}
         <div className="flex flex-wrap gap-8 justify-center">
        {data.map((elem, id) => {
          return (
            <div
              key={id}
              className="w-75 h-[200px] rounded-2xl bg-amber-100  "
            >
              <h1 className="text-blue-500 font-extrabold text-center mt-2">
                {elem.name}
              </h1>
              <h2 className="text-blue-300 text-center">{elem.username}</h2>
              <p className="text-blue-600 text-center my-5">{elem.post}</p>
              <div className="flex justify-between items-center text-blue-800 p-5">
                <li className="list-none">Comments: {elem.comments}</li>
                <li className="list-none">Likes: {elem.likes}</li>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sections;

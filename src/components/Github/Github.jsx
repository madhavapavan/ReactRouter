import React, { useEffect, useState } from 'react'; 
import { useLoaderData} from 'react-router-dom';
function Github() {

// const [data, setData] = React.useState([])
// useEffect(() => {
//     fetch('https://api.github.com/users/madhavapavan')
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       })
//       .catch((error) => console.error(error));
//   }, []);

const data = useLoaderData();

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt='avatar' width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/madhavapavan');
    const data = await response.json();
    return data;
    }
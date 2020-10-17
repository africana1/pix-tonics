import React from 'react';

const ImageCard = ({image}) => {
  const {id, user, webformatURL, views, downloads, likes, largeImageURL} = image;
  let tags;
  tags = image.tags.split(',');

  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
      <img src={webformatURL} alt={id} title={user} className='w-full' />
      <div className='px-6 py-4'>
        <div className='font-bold text-purple-500 text-xl mb-2'>Photo by {user}</div>
        <ul>
          <li>
            <strong>Views: </strong>
            {views}
          </li>

          <li>
            <strong>Downloads: </strong>
            {downloads}
          </li>

          <li>
            <strong>Likes: </strong>
            {likes}
          </li>
        </ul>
      </div>
      <div className='px-6 py-4'>
        <a
          href={largeImageURL}
          className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded inline-flex items-center'
        >
          <svg className='fill-current w-4 h-4 mr-2' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z' />
          </svg>
          Preview
        </a>
        <br />
        <br />
        {tags.map((tag) => {
          return (
            <span
              key={tag}
              className='inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2 mb-1'
            >
              #{tag}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ImageCard;

import React, {useState, useEffect} from 'react';
import ImageCard from './components/ImageCard.components';
import ImageSearch from './components/ImageSearch.component';

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  const [error, setError] = useState('');

  useEffect(() => {
    setError('');
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&per_page=10`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        console.log(err.message);
      });
  }, [term]);

  return (
    <div className='container mx-auto'>
      <ImageSearch searchText={(text) => setTerm(text)} />
      <p className='text-2xl text-red-500 text-center mx-auto mb-5'>{error}</p>
      {!isLoading && images.length === 0 && (
        <h1 className='text-5xl text-center mx-auto mt-32'>No images found...</h1>
      )}

      {isLoading ? (
        <h1 className='text-6xl text-center mx-auto mt-32'>Loading...</h1>
      ) : (
        <div className='grid grid-cols-3 gap-4'>
          {images.map((image) => {
            return <ImageCard key={image.id} image={image} />;
          })}
        </div>
      )}
    </div>
  );
};

export default App;

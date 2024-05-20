import React from 'react';
import { Link } from 'react-router-dom';
import City1 from './City1';
import City2 from './City2';
import City3 from './City3';
import City4 from './City4';
import City5 from './City5';
import City6 from './City6';
import City7 from './City7';
import City8 from './City8';
import City9 from './City9';
import City10 from './City10';

const Navigation = () => {
  return (
    <div className='flex flex-row gap-5 mt-10'>
      {/* City 1 */}
      <Link to='city1' className='link'>
        <figure>
          <City1 />
          <figcaption>City 1</figcaption>
        </figure>
      </Link>
      {/* City 2 */}
      <Link to='city2' className='link'>
        <figure>
          <City2 />
          <figcaption>City 2</figcaption>
        </figure>
      </Link>
      {/* City 3 */}
      <Link to='city3' className='link'>
        <figure>
          <City3 />
          <figcaption>City 3</figcaption>
        </figure>
      </Link>
      {/* City 4 */}
      <Link to='city4' className='link'>
        <figure>
          <City4 />
          <figcaption>City 4</figcaption>
        </figure>
      </Link>
      {/* City 5 */}
      <Link to='city5' className='link'>
        <figure>
          <City5 />
          <figcaption>City 5</figcaption>
        </figure>
      </Link>
      {/* City 6 */}
      <Link to='city6' className='link'>
        <figure>
          <City6 />
          <figcaption>City 6</figcaption>
        </figure>
      </Link>
      {/* City 7 */}
      <Link to='city7' className='link'>
        <figure>
          <City7 />
          <figcaption>City 7</figcaption>
        </figure>
      </Link>
      {/* City 8 */}
      <Link to='city8' className='link'>
        <figure>
          <City8 />
          <figcaption>City 8</figcaption>
        </figure>
      </Link>
      {/* City 9 */}
      <Link to='city9' className='link'>
        <figure>
          <City9 />
          <figcaption>City 9</figcaption>
        </figure>
      </Link>
      {/* City 10 */}
      <Link to='city10' className='link'>
        <figure>
          <City10 />
          <figcaption>City 10</figcaption>
        </figure>
      </Link>
    </div>
  );
}

export default Navigation;

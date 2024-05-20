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
    <div>
      {/* City 1 */}
      <Link to='city1'>
        <figure>
          <City1 />
          <figcaption>City</figcaption>
        </figure>
      </Link>
      {/* City 2 */}
      <Link to='city2'>
        <figure>
          <City2 />
          <figcaption>City</figcaption>
        </figure>
      </Link>
      {/* City 3 */}
      <Link to='city3'>
        <figure>
          <City3 />
          <figcaption>City</figcaption>
        </figure>
      </Link>
      {/* City 4 */}
      <Link to='city4'>
        <figure>
          <City4 />
          <figcaption>City</figcaption>
        </figure>
      </Link>
      {/* City 5 */}
      <Link to='city5'>
        <figure>
          <City5 />
          <figcaption>City</figcaption>
        </figure>
      </Link>
      {/* City 6 */}
      <Link to='city6'>
        <figure>
          <City6 />
          <figcaption>City</figcaption>
        </figure>
      </Link>
      {/* City 7 */}
      <Link to='city7'>
        <figure>
          <City7 />
          <figcaption>City</figcaption>
        </figure>
      </Link>
      {/* City 8 */}
      <Link to='city8'>
        <figure>
          <City8 />
          <figcaption>City</figcaption>
        </figure>
      </Link>
      {/* City 9 */}
      <Link to='city9'>
        <figure>
          <City9 />
          <figcaption>City</figcaption>
        </figure>
      </Link>
      {/* City 10 */}
      <Link to='city10'>
        <figure>
          <City10 />
          <figcaption>City</figcaption>
        </figure>
      </Link>
    </div>
  );
}

export default Navigation;

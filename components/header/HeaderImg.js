import {useRouter} from 'next/router';

const HeaderImg = () => {
  const router = useRouter();
  const imgURL = `/imgs${router.pathname}hero`;

  const altTags = {
    '/': 'Lady in a taxi on the phone',
    '/station': 'Picture of lots of trains at the station',
    '/airport': 'Picture of plane landing at an Airport',
    '/blog': 'Picture of a computer keyboard'
  }
  return (
    <picture>
      <source srcSet={`${imgURL}mobile.jpg`} media="(max-width: 768px)"/>
      <img src={`${imgURL}.jpg`} alt={altTags[router.pathname]}/>
    </picture>
  )
}

export default HeaderImg;
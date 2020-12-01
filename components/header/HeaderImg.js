import {useRouter} from 'next/router';
import Image from 'next/image';

const HeaderImg = () => {
  const router = useRouter();
  const imgURL = `/imgs${router.pathname}hero.jpg`;

  const altTags = {
    '/': 'Lady in a taxi on the phone',
    '/station': 'Picture of lots of trains at the station',
    '/airport': 'Picture of plane landing at an Airport',
    '/blog': 'Picture of a computer keyboard'
  }
  return (
    <Image src={imgURL} layout="fill" alt={altTags[router.pathname]}/>
  )
}

export default HeaderImg;
import { ImageSourcePropType } from 'react-native';

// Local image assets
const localImages: Record<string, ImageSourcePropType> = {
  // Company logos
  awarri: require('../assets/images/awarri.jpg'),
  kbc: require('../assets/images/kbc-logo-2.png'),
  p23: require('../assets/images/p23img.jpg'),
  sparkstrand: require('../assets/images/sparkstrand.jpg'),
  storipod: require('../assets/images/storipod.png'),
  storipod1: require('../assets/images/storipod1.png'),
  // School logos
  uopeople: require('../assets/images/uopeople.jpg'),
  rugipo: require('../assets/images/rugipo.jpg'),
  // Project images
  realestate: require('../assets/images/realestate.jpeg'),
  todoimg: require('../assets/images/todoimg.webp'),
  shopcart: require('../assets/images/shopcart.jpg'),
  batteryimg: require('../assets/images/batteryimg.webp'),
  delivery: require('../assets/images/delivery.avif'),
  comingsoon: require('../assets/images/comingsoonimg.jpg'),
  openstore: require('../assets/images/openstoreimg.webp'),
  // Profile
  profile: require('../assets/images/jerrydp.jpg'),
};

// Remote image map for project imageIds from placeholder-images.json
const remoteImages: Record<string, ImageSourcePropType> = {
  'profile-pic': { uri: 'https://avatars.githubusercontent.com/u/99956721?s=400&u=ce5549a79d0b1d10be34196c973df2b49309c01b&v=4' },
  'project-1': { uri: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=400&q=80' },
  'project-2': { uri: 'https://media.istockphoto.com/id/1755134857/photo/man-arriving-to-the-hospital-and-talking-to-a-nurse-at-the-front-desk.jpg?s=612x612&w=is&k=20&c=GOuXeRZXsrZOMYdCXJg9vhYGgnMQV4jNfWYu9LK1Kdw=' },
  'project-3': { uri: 'https://images.unsplash.com/photo-1728995025396-b5141e209455?w=400&q=80' },
  'project-4': { uri: 'https://cdn.pixabay.com/photo/2021/07/10/15/45/online-shop-6401739_640.png' },
  'project-5': localImages.realestate,
  'project-6': localImages.todoimg,
  'project-7': localImages.shopcart,
  'project-8': localImages.batteryimg,
  'project-9': localImages.delivery,
  'project-ml': localImages.comingsoon,
};

export function getProjectImage(imageId: string): ImageSourcePropType {
  return remoteImages[imageId] ?? localImages.comingsoon;
}

export function getExperienceLogo(imageUrl?: string): ImageSourcePropType {
  if (!imageUrl) return localImages.comingsoon;
  const map: Record<string, ImageSourcePropType> = {
    '/awarri.jpg': localImages.awarri,
    '/kbc-logo-2.png': localImages.kbc,
    '/p23img.jpg': localImages.p23,
    '/sparkstrand.jpg': localImages.sparkstrand,
    '/storipod.png': localImages.storipod,
    '/storipod1.png': localImages.storipod1,
  };
  return map[imageUrl] ?? localImages.comingsoon;
}

export function getEducationLogo(imageUrl: string): ImageSourcePropType {
  const map: Record<string, ImageSourcePropType> = {
    '/uopeople.jpg': localImages.uopeople,
    '/rugipo.jpg': localImages.rugipo,
  };
  return map[imageUrl] ?? localImages.comingsoon;
}

export function getProfileImage(): ImageSourcePropType {
  return localImages.profile;
}

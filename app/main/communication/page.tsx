import StoryContainer from './components/StoryContainer';
import WriteStoryContainer from './components/WriteStoryContainer';

export default function page() {
  return (
    <>
      <WriteStoryContainer />
      <div className="h-2 w-full bg-gray-2" />
      <div className="flex flex-col divide-y-[1px] divide-gray-4 px-[25px] py-3">
        <StoryContainer
          tags={['일자리']}
          userName={'털이'}
          created_at="3시간"
          phrase="텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트"
          images={[
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Stray_cat_at_Castillo_San_Felipe_del_Morro%2C_Puerto_Rico_%28cropped%29.jpg/800px-Stray_cat_at_Castillo_San_Felipe_del_Morro%2C_Puerto_Rico_%28cropped%29.jpg',
          ]}
          comment={['hihi', 'zz']}
          like={4}
        />
        <StoryContainer
          tags={['일자리']}
          userName={'털이'}
          created_at="3시간"
          phrase="텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트"
          images={[
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Stray_cat_at_Castillo_San_Felipe_del_Morro%2C_Puerto_Rico_%28cropped%29.jpg/800px-Stray_cat_at_Castillo_San_Felipe_del_Morro%2C_Puerto_Rico_%28cropped%29.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/F-35_Heritage_Flight_Team_performs_in_Bell_Fort_Worth_Alliance_AirShow.jpg/500px-F-35_Heritage_Flight_Team_performs_in_Bell_Fort_Worth_Alliance_AirShow.jpg',
          ]}
          comment={['hihi', 'zz']}
          like={4}
        />
        <StoryContainer
          tags={['일자리']}
          userName={'털이'}
          created_at="3시간"
          phrase="텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트"
          images={[
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/F-35_Heritage_Flight_Team_performs_in_Bell_Fort_Worth_Alliance_AirShow.jpg/500px-F-35_Heritage_Flight_Team_performs_in_Bell_Fort_Worth_Alliance_AirShow.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/F-35_Heritage_Flight_Team_performs_in_Bell_Fort_Worth_Alliance_AirShow.jpg/500px-F-35_Heritage_Flight_Team_performs_in_Bell_Fort_Worth_Alliance_AirShow.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/F-35_Heritage_Flight_Team_performs_in_Bell_Fort_Worth_Alliance_AirShow.jpg/500px-F-35_Heritage_Flight_Team_performs_in_Bell_Fort_Worth_Alliance_AirShow.jpg',
          ]}
          comment={['hihi', 'zz']}
          like={4}
        />
        <StoryContainer
          tags={['일자리']}
          userName={'털이'}
          created_at="3시간"
          phrase="텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트"
          images={[
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/F-35_Heritage_Flight_Team_performs_in_Bell_Fort_Worth_Alliance_AirShow.jpg/500px-F-35_Heritage_Flight_Team_performs_in_Bell_Fort_Worth_Alliance_AirShow.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/F-35_Heritage_Flight_Team_performs_in_Bell_Fort_Worth_Alliance_AirShow.jpg/500px-F-35_Heritage_Flight_Team_performs_in_Bell_Fort_Worth_Alliance_AirShow.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Stray_cat_at_Castillo_San_Felipe_del_Morro%2C_Puerto_Rico_%28cropped%29.jpg/800px-Stray_cat_at_Castillo_San_Felipe_del_Morro%2C_Puerto_Rico_%28cropped%29.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/F-35_Heritage_Flight_Team_performs_in_Bell_Fort_Worth_Alliance_AirShow.jpg/500px-F-35_Heritage_Flight_Team_performs_in_Bell_Fort_Worth_Alliance_AirShow.jpg',
          ]}
          comment={['hihi', 'zz']}
          like={4}
        />
      </div>
    </>
  );
}

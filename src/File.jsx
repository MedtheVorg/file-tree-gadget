import {
  BsFillFileEarmarkMusicFill,
  BsFillImageFill,
  BsCameraVideoFill,
  BsFillFileEarmarkFill,
} from 'react-icons/bs';

const File = ({ content, type }) => {
  return (
    <div className="file flex">
      {type == 'image' ? (
        <BsFillImageFill />
      ) : type == 'audio' ? (
        <BsFillFileEarmarkMusicFill />
      ) : type == 'video' ? (
        <BsCameraVideoFill />
      ) : (
        <BsFillFileEarmarkFill />
      )}{' '}
      <p>{content}</p>
    </div>
  );
};
export default File;

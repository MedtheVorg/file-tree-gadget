import Folder from './Folder';
import File from './File';

const Tree = ({ files }) => {
  return (
    <ul className="main__list">
      {files.map((file, idx) => {
        if (file.type == 'folder') {
          return (
            <li key={idx}>
              <Folder folderContent={file.content} folderName={file.name} />
            </li>
          );
        } else {
          return (
            <li key={idx}>
              <File content={file.name} type={file.type} />
            </li>
          );
        }
      })}
    </ul>
  );
};
export default Tree;

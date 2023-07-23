import { useState } from 'react';
import { FcFolder, FcOpenedFolder } from 'react-icons/fc';
import { BiSolidRightArrow, BiSolidDownArrow } from 'react-icons/bi';
import File from './File';

const Folder = ({ folderContent, folderName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState(folderName);

  function handleHeaderClicked() {
    setIsOpen(!isOpen);
  }

  function handleInputFieldClicked(e) {
    console.log('clicked');
    console.dir(e.target);
    e.target.disabled = false;
  }
  return (
    <div className="list">
      <div className="list__header">
        <div onClick={handleHeaderClicked}>
          {isOpen ? <FcOpenedFolder size={30} /> : <FcFolder size={30} />}
          {isOpen ? (
            <BiSolidDownArrow size={15} />
          ) : (
            <BiSolidRightArrow size={15} />
          )}
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onDoubleClick={(e) => handleInputFieldClicked(e)}
        />
      </div>
      <div className={`list__body  ${!isOpen ? 'hidden' : ''}`}>
        <ul>
          {folderContent.map((file, idx) => {
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
      </div>
    </div>
  );
};
export default Folder;

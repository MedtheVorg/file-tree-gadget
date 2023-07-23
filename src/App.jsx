import './App.scss';
import Tree from './Tree';
import files from './Files';

const App = () => {
  return (
    <div className="app">
      <h1>Files Viewer</h1>
      <Tree files={files} />
    </div>
  );
};
export default App;

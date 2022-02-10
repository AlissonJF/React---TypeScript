import * as React from 'react';
import { render } from 'react-dom';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: 'React',
    };
  }

  handleChange(selectorFiles: FileList) {
    console.log(selectorFiles);
  }

  render() {
    return (
      <div>
        <input
          type="file"
          onChange={(e) => this.handleChange(e.target.files)}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById('file'));

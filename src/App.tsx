import * as React from 'react';

import { CssBaseline } from '@material-ui/core';

import { Main } from './scenes/Main';

const App: React.FC<unknown> = () => (
  <>
    <CssBaseline />
    <Main />
  </>
);
export default App;

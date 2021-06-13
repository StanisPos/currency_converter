import * as React from 'react';
import { AppBar, IconButton, InputBase, Toolbar, Typography } from '@material-ui/core';
import * as Icons from '@material-ui/icons';

type Props = {
  testId?: string;
};

const Main: React.FC<Props> = (props) => (
  <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" aria-label="open drawer">
        <Icons.Menu />
      </IconButton>
      <Typography variant="h2" noWrap>
        Currency Converter
      </Typography>
      <div>
        <Icons.Search />
        <InputBase placeholder="Search..." inputProps={{ 'aria-label': 'search' }} />
      </div>
    </Toolbar>
  </AppBar>
);

export default React.memo(Main);

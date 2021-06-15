import * as React from 'react';

import { makeStyles } from '@material-ui/core';
import { Content } from 'components/Content';

import { NavBar } from '../../components/NavBar';
import { StyledDrawer } from '../../components/StyledDrawer';

type Props = {
  testId?: string;
};

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
}));

const Main: React.FC<Props> = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <NavBar isMenuOpen={open} handleDrawerOpen={handleDrawerOpen} />
      <StyledDrawer isMenuOpen={open} handleDrawerClose={handleDrawerClose} />
      <Content />
    </div>
  );
};
export default React.memo(Main);

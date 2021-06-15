import * as React from 'react';

import { Drawer, IconButton, makeStyles } from '@material-ui/core';
import * as Icons from '@material-ui/icons';
import clsx from 'clsx';

import { DrawerList } from './components/DrawerList';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  menuBtn: {
    width: '100%',
    justifyContent: 'flex-end',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
}));

type Props = {
  isMenuOpen: boolean;
  handleDrawerClose(): void;
};

const options = [
  {
    text: 'Inbox',
    icon: <Icons.Inbox />,
  },
  {
    text: 'Starred',
    icon: <Icons.Adb />,
  },
  {
    text: 'Send email',
    icon: <Icons.Mail />,
  },
  {
    text: 'Drafts',
    icon: <Icons.Drafts />,
  },
];

const StyledDrawer: React.FC<Props> = (props) => {
  const { isMenuOpen } = props;
  const classes = useStyles();

  const classNames = React.useMemo(
    () =>
      clsx(classes.drawer, {
        [classes.drawerOpen]: isMenuOpen,
        [classes.drawerClose]: !isMenuOpen,
      }),
    [isMenuOpen]
  );

  const subClasses = React.useMemo(
    () => ({
      paper: clsx({
        [classes.drawerOpen]: isMenuOpen,
        [classes.drawerClose]: !isMenuOpen,
      }),
    }),
    [isMenuOpen]
  );

  return (
    <Drawer variant="permanent" className={classNames} classes={subClasses}>
      <div className={classes.toolbar}>
        <IconButton className={classes.menuBtn} onClick={props.handleDrawerClose}>
          <Icons.ChevronLeft />
        </IconButton>
      </div>
      <DrawerList options={options} />
    </Drawer>
  );
};

export default React.memo(StyledDrawer);

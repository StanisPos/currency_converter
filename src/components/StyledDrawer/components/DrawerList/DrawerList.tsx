import * as React from 'react';

import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

type Props = {
  options: { text: string; icon: JSX.Element }[];
  dividerCount?: number;
};

const DrawerList: React.FC<Props> = (props) => {
  const { dividerCount } = props;

  const renderDivider = React.useCallback(
    (index: number) => {
      if (dividerCount && index % dividerCount === 0) {
        return <Divider />;
      }
    },
    [dividerCount]
  );

  return (
    <List>
      <Divider />
      {props.options.map(({ text, icon }, index) => (
        <React.Fragment key={text}>
          {renderDivider(index)}
          <ListItem button>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        </React.Fragment>
      ))}
    </List>
  );
};

export default React.memo(DrawerList);

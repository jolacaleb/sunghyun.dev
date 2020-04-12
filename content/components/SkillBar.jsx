import React from 'react';

import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Tooltip from '@material-ui/core/Tooltip';

function SkillBar(props) {
    const classes = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        margin: {
          margin: theme.spacing(1),
        },
      }));
    const BorderLinearProgress = withStyles({
        root: {
          height: 10,
          backgroundColor: lighten(props.color, 0.8),
        },
        bar: {
          borderRadius: 20,
          backgroundColor: props.color
        },
      })(LinearProgress);
  return (
    <Tooltip title={props.caption} placement="right">
        <div style={{'width': '50%', 'margin-bottom': '16px'}}>
            <span><b>{props.name}</b></span>
            <BorderLinearProgress 
                className={classes.margin}
                variant="determinate" 
                color="primary"
                value={props.value}
            />
            <code>{props.value}</code>
        </div>
    </Tooltip>
  );
}

export default SkillBar;

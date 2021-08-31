import { PhotoCamera } from '@material-ui/icons/';

import classes from './PopoverContent.module.scss';

export const PopoverContent = () => {
  return (
    <div className={classes.PopoverContent}>
      <div className={classes.title}>
        <PhotoCamera fontSize="small" />
        <span className={classes.titleLabel}>Photo Booth</span>
      </div>

      <div className="body">The main content or body of the popover</div>
    </div>
  );
};

// import PropTypes from 'prop-types';
import React from 'react';

// Components
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

// REFACTOR: Need a grade icon
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

// Styles
import styles from '../styles/grocery-item.module.css';

// Utils
import { getUrl } from './placeholder-data';

const getImage = (item) => getUrl(item);

const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

const GroceryItem = ({ item }) => (
  // REFACTOR: Replace fake static data here
  <div className={styles.item}>
    <Card className={styles.itemCard}>
      <Grid container justify="space-between">
        <Grid item>
          <FiberManualRecordIcon className={styles.average} />
        </Grid>
        <Grid item>
          <AddCircleIcon className={styles.plus} />
        </Grid>
      </Grid>
      <CardMedia
        component="img"
        alt={item}
        height="100"
        image={getImage(item)}
        title={item}
      />
      <CardActions>
        <Typography variant="body2" component="p">
          {capitalize(item)}
        </Typography>
        <Button size="small">Details</Button>
      </CardActions>
    </Card>
  </div>
);

// GroceryItem.propTypes = {
// };

// GroceryItem.defaultProps = {
// };

export default GroceryItem;

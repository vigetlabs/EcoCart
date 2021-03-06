import React from 'react';

// Componenets
import {
  Button,
  Grid,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Box,
} from '@material-ui/core';
import { navigate } from 'gatsby';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ecoLogo from '../../images/EcoCart_Logo.png';

// Styles
import styles from './styles/navigation-bar.module.css';

// Data
import catList from '../../../content/food-categories.json';

const NavigationBar = ({ toggleModal, resetHeaderTop }) => {
  const getMenuItems = () => catList.categories.map((cat) => (
    <MenuItem
      className={styles.catLink}
      onClick={() => { navigate(`/#${cat.replace(/\s/g, '')}`); }}
    >
      <Typography>{cat}</Typography>
    </MenuItem>
  ));

  const getInitCat = () => (<MenuItem><Typography>{'Categories'}</Typography></MenuItem>);

  return (
    <Grid
      container
      justify="left"
      alignItems="center"
      className={styles.container}
    >
      <Grid
        item
        xs={1}
      >
        <Button
          className={styles.button}
          onClick={() => {
            resetHeaderTop();
            navigate('/');
          }}
        >
          <img
            src={ecoLogo}
            alt='EcoCart'
            className={styles.ecoLogo}
          />
        </Button>
      </Grid>
      <Grid
        item
        container
        spacing={3}
        xs={2}
        md={5}
        sm={4}
      >
        <Grid
          item
        >
          <Box className={styles.welcome}>
          <Button
            className={`${styles.button} ${styles.link}`}
            onClick={() => {
              resetHeaderTop();
              navigate('/');
            }}
          >
            <Typography>Welcome</Typography>
          </Button>
          </Box>
        </Grid>
        <Grid
          item
        >
          <FormControl
            hiddenLabel='category'
          >
            <InputLabel
              id="catSelector"
              className={styles.catLabel}
            >
              <label for="categorySelect">Select Category</label>
            </InputLabel>
            <Select
              labelId="catSelector"
              id="categorySelect"
              size='large'
              value={getInitCat}
              className={styles.catSelect}
            >
              {getMenuItems()}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid
        item
        xs={0}
        sm={1}
        md={4}
        lg={5}
      />
      <Grid
        item
      >
        <Button className={styles.button} onClick={toggleModal}>
          <ListAltIcon
            className={styles.icon}
            style={{ fontSize: 60 }}
          />
        </Button>
      </Grid>
  </Grid>
  );
};

export default NavigationBar;

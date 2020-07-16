import React from 'react';

// Components
import { Modal, Paper, Grid } from '@material-ui/core';
import InfoSection from './info-section/InfoSection';
import DataSection from './data-section/DataSection';

// Style
import styles from './styles/item-modal.module.css';

// Data
import foodData from '../../../content/food-data.json';

const closeModal = (setModalOpen) => {
  setModalOpen(false);
};

const ItemModal = ({
  isModalOpen, setModalOpen, item, cartState, setCartState,
}) => {
  const foodItem = foodData[item];

  return (
  <Modal
    open={isModalOpen}
    onClose={() => closeModal(setModalOpen)}
    aria-labelledby={`${item}-modal`}>
    <Paper className={styles.modal}>
      <Grid
        container
        direction="column"
        alignItems="flex-end"
        alignContent="space-around"
        justify="center"
        className={styles.grid}>
        <Grid item>
          <Grid container alignContent="space-around" justify="center">
            <Grid item className={styles.square}>
              <img className={styles.picture} src={foodItem.other.imageUrl} alt={item} />
            </Grid>
            <Grid item className={styles.square}>
              <InfoSection
                item={item}
                cartState={cartState}
                setCartState={setCartState}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <DataSection item={item} />
        </Grid>
      </Grid>
    </Paper>
  </Modal>
  );
};
export default ItemModal;

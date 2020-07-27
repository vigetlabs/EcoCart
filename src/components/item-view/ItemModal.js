import React from 'react';

// Components
import { Modal, Paper, Grid } from '@material-ui/core';
import InfoSection from './info-section/InfoSection';
import DataSection from './data-section/DataSection';

// Style
import styles from './styles/item-modal.module.css';

// Data
import foodData from '../../../content/food-data.json';

const ItemModal = ({
  isModalOpen, setModalOpen, item, cartState, setCartState, toggleHeaderTop,
}) => {
  const foodItem = foodData[item];

  const closeModal = () => {
    toggleHeaderTop();
    setModalOpen(false);
  };

  return (
  <Modal
    open={isModalOpen}
    onClose={() => closeModal(setModalOpen)}
    aria-labelledby={`${item}-modal`}
  >
    <Paper className={styles.modal}>
      <Grid
        container
        justify="center"
        className={styles.modalBox}
        xl={12}
      >
        <Grid
          item
          container
          xl={12}
        >
          <Grid
            item
            container
            justify="center"
            lg={6}
            className={styles.imageBox}
          >
            <img
              src={foodItem.other.imageUrl}
              alt={item}
              className={styles.image}
            />
          </Grid>
          <Grid
            item
            lg={6}
            md={12}
            sm={12}
            xs={12}
            className={styles.infoBox}
          >
            <InfoSection
              item={item}
              cartState={cartState}
              setCartState={setCartState}
            />
          </Grid>
        </Grid>
        <Grid
          item
          lg={12}
          className={styles.DataSectionBox}
        >
          <DataSection item={item} />
        </Grid>
      </Grid>
    </Paper>
  </Modal>
  );
};
export default ItemModal;

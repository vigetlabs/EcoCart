import React from 'react';

// Components
import { Modal, Paper, Grid } from '@material-ui/core';
import InfoSection from './info-section/InfoSection';

// Style
import styles from './styles/item-modal.module.css';

// Utils
import { getUrl } from '../grocery-view/grocery-section/placeholder-data';

const closeModal = (setModalOpen) => {
  setModalOpen(false);
};

const ItemModal = ({ isModalOpen, setModalOpen, item }) => (
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
              <img className={styles.picture} src={getUrl(item)} alt={item} />
            </Grid>
            <Grid item className={styles.square}>
              <InfoSection item={item} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container justify="center">
            <Grid item className={styles.square}>
              <h1>Donut!</h1>
            </Grid>
            <Grid item className={styles.square}>
              <h1>Details!</h1>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  </Modal>
);

export default ItemModal;

import React from 'react';

// Components
import { Modal, Card, CardContent } from '@material-ui/core';

const closeModal = (setModalOpen) => {
  setModalOpen(false);
};

const ItemModal = ({ isModalOpen, setModalOpen, item }) => {
  const body = (
    <div>
      <h1>This is a modal!</h1>
    </div>
  );

  return (
    <Modal
      open={isModalOpen}
      onClose={() => closeModal(setModalOpen)}
      aria-labelledby={`${item}-modal`}>
      <Card>
        <CardContent>{item}</CardContent>
      </Card>
    </Modal>
  );
};

export default ItemModal;

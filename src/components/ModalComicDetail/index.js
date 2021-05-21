import React, { useEffect, useState, useCallback } from 'react';
import Modal from '../Modal';

import api from '../../services/api'

const ModalComicDetail = ({ comicId, onClickClose }) => {

    return (
        <Modal isOpen onClickClose={onClickClose}>
            <h2>Detalhes</h2>
        </Modal>
    )
}

export default ModalComicDetail;
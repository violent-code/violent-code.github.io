import React, { createRef, useCallback, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';

const cn = classNames.bind(styles);

const Modal = ({ children, closeModal }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.focus();
    }
  }, [modalRef.current]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  return (
    <div
      ref={modalRef}
      className={cn('modal')}
      onClick={closeModal}
      tabIndex="0"
      onKeyDown={handleKeyDown}
    >
      <div
        className={cn('modal__content')}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;

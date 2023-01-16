import React, { useCallback } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Modal from '~/components/Modal';
import IconClose from '~/assets/icons/Icon_close_modal_x.svg';
import styles from './TestimonialModal.module.scss';

const cn = classNames.bind(styles);

const TestimonialModal = ({ photo, message, name, academy, closeModal }) => {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        closeModal();
      }
    },
    [closeModal]
  );

  return (
    <Modal closeModal={closeModal}>
      <div className={cn('testimonial-modal')}>
        <header className={cn('testimonial-modal__header')}>
          <div className={cn('testimonial-modal__graduate')}>
            <img
              className={cn('testimonial-modal__photo')}
              src={photo}
              alt={name}
            />
            <div className={cn('testimonial-modal__graduate-info')}>
              <h3 className={cn('testimonial-modal__graduate-name')}>{name}</h3>
              <h3 className={cn('testimonial-modal__academy')}>{academy}</h3>
            </div>
          </div>
          <div
            className={cn('testimonial-modal__close-button')}
            onClick={closeModal}
            tabIndex="0"
            onKeyDown={handleKeyDown}
          >
            <IconClose alt="close" />
          </div>
        </header>

        <p className={cn('testimonial-modal__message')}>{message}</p>
      </div>
    </Modal>
  );
};

TestimonialModal.propTypes = {
  photo: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  academy: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default TestimonialModal;

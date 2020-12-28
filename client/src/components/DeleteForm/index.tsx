import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useUser } from '../../libs/auth/useUser';
import { selectDialog, selectDialogMessage } from '../../redux/modules/dialog';
import { selectDeleteForm, toggleDeleteForm } from '../../redux/modules/modal';
import { Dialog } from '../Dialog';
import { DeleteForm as Presentational } from './DeleteForm';

export const DeleteForm: React.VFC = () => {
  const dispatch = useDispatch();
  const dialogIsOpened = useSelector(selectDialog);
  const dialogMessage = useSelector(selectDialogMessage);
  const formIsOpened = useSelector(selectDeleteForm);
  const { deleteUser } = useUser();

  const closeModal = () => {
    dispatch(toggleDeleteForm(false));
  };
  const handleRemove = async (value: { email: string; password: string }) => {
    await deleteUser(value);
  };
  return (
    <>
      {dialogIsOpened && <Dialog message={dialogMessage} />}
      {formIsOpened && (
        <Presentational closeModal={closeModal} handleRemove={handleRemove} />
      )}
    </>
  );
};

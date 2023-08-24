'use client';

import useUploadModal from '@/hooks/useUploadModal';
import Modal from './Modal';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import Input from './Input';

interface UploadModalProps {}

function UploadModal({}: UploadModalProps) {
  const [isLoading, setIsLoading] = useState();
  const uploadModal = useUploadModal();

  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      author: '',
      title: '',
      song: null,
      image: null,
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    //upload to supabase
  };

  const onChange = (open: boolean) => {
    if (!open) {
      reset();
      uploadModal.onClose();
    }
  };

  return (
    <Modal
      title='Add a song'
      description='Upload an mp3 file'
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id='title'
          disabled={isLoading}
          {...register('title', { required: true })}
          placeholder='Song Title'
        />
      </form>
    </Modal>
  );
}

export default UploadModal;

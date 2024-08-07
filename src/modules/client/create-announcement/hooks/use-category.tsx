import { useCategoriesApi } from '@/api/client';
import type { TxKeyPath } from '@/core';
import { useCustomForm } from '@/core';
import { useFormStepper } from '@/shared';
import type { AnnouncementType } from '@/types/announcement';

import { CreateAnnouncementStepThreeSchema } from '../schemas';
import type { projectCategoryFormType } from '../types';

export const useCategory = () => {
  const { onHandleBack, onHandleNext, setFormData, formData } =
    useFormStepper<AnnouncementType>();

  const { handleSubmit, control, errors } = useCustomForm(
    CreateAnnouncementStepThreeSchema,
    { projectCategory: formData?.projectCategory }
  );
  const {
    data: CategoryData,
    isError,
    isLoading,
    isSuccess,
  } = useCategoriesApi();

  const error = errors?.projectCategory?.message as TxKeyPath | undefined;

  const onSubmit = (data: projectCategoryFormType) => {
    setFormData((prev: any) => ({
      ...prev,
      ...data,
    }));
    onHandleNext();
  };
  const onRollBack = () => {
    formData.projectCategory = 0;
    onHandleBack();
  };
  return {
    onRollBack,
    onHandleNext,
    setFormData,
    formData,
    handleSubmit,
    control,
    error,
    onSubmit,
    CategoryData,
    isError,
    isLoading,
    isSuccess,
  };
};

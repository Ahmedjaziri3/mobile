import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { useCategoriesApi } from '@/api/architect/project';
import type { TxKeyPath } from '@/core';
import { ProjectCategoryComp, StepButtons } from '@/modules/shared';
import { ScrollView, Text, View } from '@/shared/components';
import { ErrorData, PendingData } from '@/shared/components';
import { useCustomForm } from '@/shared/hooks';
import { useFormStepper } from '@/shared/providers';

import { ProjectCategorySchema } from '../schemas';
import type { ProjectRealizationType } from '../types';

export default function ProjectCategory() {
  const router = useRouter();
  type CategoryFormType = Pick<ProjectRealizationType, 'projectCategory'>;
  const { formData, setFormData, onHandleNext } =
    useFormStepper<ProjectRealizationType>();
  const { handleSubmit, control, errors } = useCustomForm(
    ProjectCategorySchema,
    {
      projectCategory: formData.projectCategory,
    }
  );

  const { data, isPending, isError } = useCategoriesApi();

  const onHandleBack = () => {
    router.back();
  };
  const onSubmit = (selectedData: CategoryFormType) => {
    setFormData((prev: any) => ({
      ...prev,
      ...selectedData,
    }));
    onHandleNext();
  };

  const error = errors.projectCategory?.message as TxKeyPath | undefined;
  return (
    <View className="mb-5 flex h-full flex-1 items-start justify-between gap-16  ">
      {isError ? (
        <ErrorData message="Error Loading Data" />
      ) : (
        <>
          {isPending ? (
            <PendingData message="Pending" />
          ) : (
            <>
              <View>
                <Text
                  tx={'realisation.categoryStep.title'}
                  className="mb-2 text-center text-2xl font-extrabold"
                />
                <Text
                  tx={'realisation.categoryStep.description'}
                  className="max-w-xs text-center text-sm text-description"
                />
              </View>
              <ScrollView className="w-full">
                <View className="grid w-full grid-cols-2 gap-4">
                  <FlatList
                    data={data}
                    renderItem={({ item }) => (
                      <ProjectCategoryComp
                        name="projectCategory"
                        item={item}
                        control={control}
                      />
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                    columnWrapperStyle={styles.columnWrapperListStyle}
                    contentContainerStyle={styles.contentContainerListStyle}
                  />
                </View>
              </ScrollView>

              <StepButtons
                previous={{
                  handlePreviousStep: onHandleBack,
                  label: 'signup.retour',
                }}
                next={{
                  handleSubmit: handleSubmit(onSubmit),
                  label: 'signup.suivant',
                }}
              />
            </>
          )}
        </>
      )}
      {error && <Text tx={error} className="text-sm text-error" />}
    </View>
  );
}

const styles = StyleSheet.create({
  columnWrapperListStyle: { justifyContent: 'space-between' },
  contentContainerListStyle: { paddingHorizontal: 16 },
});

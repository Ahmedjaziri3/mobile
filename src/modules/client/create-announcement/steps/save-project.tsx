import React from 'react';

import { translate } from '@/core';
import { StepperButton } from '@/modules/shared';
import { CheckboxInput, ControlledInput, View } from '@/shared/components';
import { ControlledPhoneNumberInput } from '@/shared/components/controlled-phone-number-input';

import { useProject } from '../hooks';

export function SaveProject() {
  const { handleSubmit, control, onSubmit } = useProject();
  return (
    <View className="flex flex-1 justify-between pt-4">
      <View className="gap-4">
        <ControlledInput
          testID="name-input"
          control={control}
          name="firstName"
          label={translate('labels.name')}
          placeholder={translate('labels.name')}
        />
        <ControlledInput
          testID="surname-input"
          control={control}
          name="lastName"
          label={translate('labels.surname')}
          placeholder={translate('labels.surname')}
        />
        <ControlledInput
          testID="email-input"
          control={control}
          name="email"
          label={translate('labels.mail')}
          placeholder={translate('labels.mail')}
        />
        <ControlledPhoneNumberInput
          name="phoneNumber"
          control={control}
          label={translate('labels.phone')}
        />
        <CheckboxInput
          name="rules"
          control={control}
          accessibilityLabel={translate('announcement.rules')}
          label={translate('announcement.rules')}
        />
        <CheckboxInput
          name="receiveNotifications"
          control={control}
          accessibilityLabel={translate('announcement.receiveNotifications')}
          label={translate('announcement.receiveNotifications')}
        />
      </View>
      <StepperButton
        onPressHandler={handleSubmit(onSubmit)}
        label={translate('announcement.buttonLabel')}
      />
    </View>
  );
}

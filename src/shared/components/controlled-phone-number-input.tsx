import React, { useState } from 'react';
import type {
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';
import { useController } from 'react-hook-form';
import type { ICountry } from 'react-native-international-phone-number';
import PhoneInput from 'react-native-international-phone-number';

import type { TxKeyPath } from '@/core';

import { colors, Text, View } from './';
type TRule = Omit<
  RegisterOptions,
  'valueAsNumber' | 'valueAsDate' | 'setValueAs'
>;
export type InputControllerType<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  control: Control<T>;
  rules?: TRule;
};

interface ControlledInputProps<T extends FieldValues>
  extends InputControllerType<T> {}
export function ControlledPhoneNumberInput<T extends FieldValues>(
  props: ControlledInputProps<T>
) {
  const { name, control, rules, label } = props;

  const { field, fieldState } = useController({ control, name, rules });
  const error = fieldState.error?.message as TxKeyPath | undefined;
  const [selectedCountry, setSelectedCountry] = useState<ICountry>();

  function handleSelectedCountry(country: ICountry) {
    console.log(country);
    setSelectedCountry(country);
  }
  return (
    <View className="mb-2 w-full gap-1">
      {label && (
        <Text className="font-lato text-xs font-medium text-primary-txt md:text-lg">
          {label}
        </Text>
      )}
      <View>
        <PhoneInput
          value={(field.value as string) || ''}
          onChangePhoneNumber={field.onChange}
          selectedCountry={selectedCountry}
          onChangeSelectedCountry={handleSelectedCountry}
          phoneInputStyles={{
            container: { height: 35, backgroundColor: colors.white },
            input: { fontSize: 12 },
            callingCode: { fontSize: 12 },
            caret: { fontSize: 12, backgroundColor: colors.white },
            flag: { fontSize: 12 },
            flagContainer: { width: '40%', backgroundColor: colors.white },
          }}
        />
      </View>
      {error && (
        <Text className="text-xs text-red-400 dark:text-red-600" tx={error} />
      )}
    </View>
  );
}

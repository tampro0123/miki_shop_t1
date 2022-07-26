import { FormProvider } from 'react-hook-form';

export const FormProviderBox = ({ methods, onSubmit, children, className }) => {
  return (
    <FormProvider {...methods}>
      <form className={className} onSubmit={onSubmit}>
        {children}
      </form>
    </FormProvider>
  );
};

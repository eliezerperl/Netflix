import RegisterContainer from '@/pages/register/RegisterContainer';
import AuthLayout from '@/utils/components/shared/AuthLayout';
import Title from '@/utils/components/shared/Title';

const Register = () => {
  return (
    <>
      <Title title="Welcome" />
      <AuthLayout className="bg-hero">
        <RegisterContainer />
      </AuthLayout>
    </>
  );
};

export default Register;

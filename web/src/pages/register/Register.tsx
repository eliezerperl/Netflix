import RegisterContainer from '@/pages/register/RegisterContainer';
import AuthLayout from '@/utils/components/shared/AuthLayout';

const Register = () => {
  return (
    <>
      <AuthLayout className="bg-hero">
        <RegisterContainer />
      </AuthLayout>
    </>
  );
};

export default Register;

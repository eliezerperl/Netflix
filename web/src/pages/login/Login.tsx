import LoginContainer from '@/pages/login/LoginContainer';
import AuthLayout from '@/utils/components/shared/AuthLayout';
import Title from '@/utils/components/shared/Title';

const Login = () => {
  return (
    <>
      <Title title='Login'/>
      <AuthLayout className='bg-hero'>
        <div className="flex h-full justify-center items-center">
          <LoginContainer />
        </div>
      </AuthLayout>
    </>
  );
};

export default Login;

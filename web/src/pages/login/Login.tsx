import LoginContainer from '@/pages/login/LoginContainer';
import AuthLayout from '@/utils/components/shared/AuthLayout';

const Login = () => {
  return (
    <div>
      <AuthLayout className='bg-hero'>
        <div className="flex h-full justify-center items-center">
          <LoginContainer />
        </div>
      </AuthLayout>
    </div>
  );
};

export default Login;

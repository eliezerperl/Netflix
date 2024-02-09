import { Button } from '@/components/ui/button';
import RegisterContainer from '@/utils/components/register/RegisterContainer';
import AuthLayout from '@/utils/components/shared/AuthLayout';

const Register = () => {
  return (
    <AuthLayout
      headerChildren={
        <Button className="bg-red-600" asChild>
          <a href="/login">Sign In</a>
        </Button>
      }
      footerChildren={
        <>
          <a href="">Contact us</a>
          <a href="">Contact us</a>
          <a href="">Contact us</a>
          <a href="">Contact us</a>
          <a href="">Contact us</a>
        </>
      }>
      <section className="z-10">
        <RegisterContainer />
      </section>
    </AuthLayout>
  );
};

export default Register;

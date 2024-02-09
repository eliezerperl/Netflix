import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const LoginForm = () => {
  return (
    <form className="flex flex-col gap-3 w-72">
      <div className="text-2xl font-semibold py-3">Sign In</div>

      <Input placeholder="Email" />

      <Input placeholder="Password" />

      <Button className="bg-red-600">Sign In</Button>

      <a className='text-center' href="/forgot">Forgot password?</a>
    </form>
  );
};

export default LoginForm;

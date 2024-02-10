import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { axios, useNavigate, useState } from '@/utils/imports';

const LoginForm = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setCredentials({
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    });

    try {
      const { data } = await axios.post('/api/v1/users/signin', {
        email: e.currentTarget.email.value,
        password: e.currentTarget.password.value,
      });
      console.log(data);
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="flex flex-col gap-3 w-72" onSubmit={submitHandler}>
      <div className="text-3xl font-semibold py-3">Sign In</div>

      <Input placeholder="Email" name="email" />

      <Input placeholder="Password" name="password" />

      <Button type="submit" className="bg-red-600">
        Sign In
      </Button>

      <a className="text-center" href="/forgot">
        Forgot password?
      </a>
    </form>
  );
};

export default LoginForm;

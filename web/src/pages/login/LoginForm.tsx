import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { USER_SIGNIN } from '@/utils/actions/Actions';
import { useStoreContext } from '@/utils/context/StoreContext';
import {
  SubmitHandler,
  axios,
  toast,
  useForm,
  useNavigate,
} from '@/utils/imports';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import classNames from 'classnames';

const UserLoginSchema = z.object({
  email: z.coerce.string().email({ message: 'Invalid email address' }),
  password: z.coerce.string().min(1, { message: 'You must enter a password' }),
});

type UserLoginSchemaType = z.infer<typeof UserLoginSchema>;

const LoginForm = () => {
  const { dispatch: storeDispatch } = useStoreContext();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<UserLoginSchemaType> = async ({
    email,
    password,
  }) => {
    try {
      //dispatch get request
      const { data } = await axios.post('/api/v1/users/signin', {
        email,
        password,
      });
      //dispatch get succes
      localStorage.setItem('userInfo', JSON.stringify(data));
      storeDispatch({ type: USER_SIGNIN, payload: data });
      navigate('/browse');
    } catch (error) {
      //dispatch get fail
      console.log(error);
      toast.error('Wrong Credenetials');
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLoginSchemaType>({ resolver: zodResolver(UserLoginSchema) });

  return (
    <form
      className="flex flex-col gap-7 w-72 relative"
      onSubmit={handleSubmit(onSubmit)}>
      <div className="text-3xl font-semibold py-3">Sign In</div>

      <section className="inputSection">
        <Input
          placeholder="Email"
          className={classNames({ ['errorInput']: errors.email })}
          {...register('email')}
        />
        {errors.email && (
          <span className={'errorSpan'}>{errors.email.message}</span>
        )}
      </section>

      <section className="inputSection">
        <Input
          placeholder="Password"
          className={classNames({ ['errorInput']: errors.password })}
          {...register('password')}
        />
        {errors.password && (
          <span className={'errorSpan'}>{errors.password.message}</span>
        )}
      </section>

      <Button type="submit" className="bg-red-600 mt-3">
        Sign In
      </Button>

      <a className="text-center" href="/forgot">
        Forgot password?
      </a>
    </form>
  );
};

export default LoginForm;

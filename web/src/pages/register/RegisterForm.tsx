import {
  axios,
  useLocation,
  useNavigate,
  SubmitHandler,
  useForm,
  // toast,
  useState,
} from '@/utils/imports';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useStoreContext } from '@/utils/context/StoreContext';
import { USER_SIGNIN } from '@/utils/actions/Actions';
import AuthLayout from '@/utils/components/shared/AuthLayout';
// import { CustomError, getError, AxiosError } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import classNames from 'classnames';

const UserRegisterSchema = z.object({
  username: z.coerce.string().min(1, { message: 'You must enter a username' }),
  email: z.coerce.string().email({ message: 'Invalid email address' }),
  password: z.coerce.string().min(1, { message: 'You must enter a password' }),
  profilePicture: z
    .string()
    .url({ message: 'Invalid url' })
    .or(z.literal(''))
    .transform((val) => (val === '' ? null : val)),
});

type UserRegisterSchemaType = z.infer<typeof UserRegisterSchema>;

const RegisterForm = () => {
  const [duplicateEmail, setDuplicateEmail] = useState<boolean>(false);

  const { dispatch: storeDispatch } = useStoreContext();
  const navigate = useNavigate();
  const location = useLocation();
  const email = new URLSearchParams(location.search).get('email');

  const onSubmit: SubmitHandler<UserRegisterSchemaType> = async ({
    username,
    email,
    password,
    profilePicture,
  }) => {
    try {
      const { data } = await axios.post('/api/v1/users/signup', {
        username,
        email,
        password,
        profilePicture,
      });

      storeDispatch({ type: USER_SIGNIN, payload: data });
      navigate('/browse');
    } catch (error) {
      // const axiosError = error as AxiosError<CustomError>;
      // toast.error(getError(axiosError));
      //Error that can happen here is only duplicated email
      setDuplicateEmail(true);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegisterSchemaType>({
    resolver: zodResolver(UserRegisterSchema),
  });

  return (
    <AuthLayout className="bg-white">
      <article className="flex justify-center z-10 bg-black rounded-md shadow-2xl">
        <form
          className="flex flex-col gap-7 w-80 p-12"
          onSubmit={handleSubmit(onSubmit)}>
          <div className="text-3xl font-semibold py-3">Sign Up</div>

          <section className="inputSection">
            {email && (
              <Input
                onClick={() => setDuplicateEmail(false)}
                defaultValue={email}
                className={classNames({ ['errorInput']: errors.email })}
                {...register('email')}
              />
            )}
            {errors.email && (
              <span className={'errorSpan'}>{errors.email.message}</span>
            )}
            {duplicateEmail && (
              <span className={'errorSpan'}>Email already exists</span>
            )}
          </section>

          <section className="inputSection">
            <Input
              placeholder="Name"
              className={classNames({ ['errorInput']: errors.username })}
              {...register('username')}
            />
            {errors.username && (
              <span className={'errorSpan'}>{errors.username.message}</span>
            )}
          </section>

          <section className="inputSection">
            <Input
              placeholder="Choose Password"
              className={classNames({ ['errorInput']: errors.password })}
              {...register('password')}
            />
            {errors.password && (
              <span className={'errorSpan'}>{errors.password.message}</span>
            )}
          </section>

          <section className="inputSection">
            <Input
              placeholder="Profile Picture URL"
              className={classNames({
                ['errorInput']: errors.profilePicture,
              })}
              {...register('profilePicture')}
            />
            {errors.profilePicture && (
              <span className={'errorSpan'}>
                {errors.profilePicture.message}
              </span>
            )}
          </section>

          <Button type="submit" className="bg-red-600">
            Sign Up
          </Button>
        </form>
      </article>
    </AuthLayout>
  );
};

export default RegisterForm;

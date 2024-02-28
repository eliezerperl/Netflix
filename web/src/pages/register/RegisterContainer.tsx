import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronRight } from 'lucide-react';
import {
  SubmitHandler,
  axios,
  toast,
  useForm,
  useNavigate,
} from '@/utils/imports';
import { z } from 'zod';
import classNames from 'classnames';
import { zodResolver } from '@hookform/resolvers/zod';

const UserStartRegistrationSchema = z.object({
  email: z.coerce
    .string()
    .min(1, { message: 'Please enter an email' })
    .email({ message: 'Invalid email address' }),
});

type UserStartRegistrationSchemaType = z.infer<
  typeof UserStartRegistrationSchema
>;

const RegisterContainer = () => {
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<UserStartRegistrationSchemaType> = async ({
    email,
  }) => {
    //check if email exists in db
    try {
      await axios.post(`/api/v1/users/doesexist`, {
        email,
      });
    } catch (error) {
      toast.error(`${email} is already registered with an existing account`);
      return;
    }

    navigate(`/register?email=${email}`);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserStartRegistrationSchemaType>({
    resolver: zodResolver(UserStartRegistrationSchema),
  });

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-6 p-9 z-10 h-full">
        <h1 className="text-3xl text-center font-bold">
          Unlimited movies, TV shows, and more
        </h1>
        <p className="font-semibold">Watch anywhere. Cancel anytime.</p>
        <p className="text-center font-semibold">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form className="flex gap-3 relative" onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="Email"
            className={classNames({ ['errorInput']: errors.email })}
            {...register('email')}
          />
          {errors.email && (
            <span className={'errorSpan left-4'}>{errors.email.message}</span>
          )}
          <Button className="bg-red-600" type="submit">
            Get Started <ChevronRight />
          </Button>
        </form>
      </div>
    </>
  );
};

export default RegisterContainer;

import React from 'react';
import { axios, useLocation, useNavigate } from '@/utils/imports';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useStoreContext } from '@/utils/context/StoreContext';
import { USER_SIGNIN } from '@/utils/actions/Actions';
import AuthLayout from '@/utils/components/shared/AuthLayout';
import { toast } from 'react-toastify';
import { CustomError, getError } from '@/lib/utils';
import { AxiosError } from 'axios';

const RegisterForm = () => {
  const { dispatch: storeDispatch } = useStoreContext();
  const navigate = useNavigate();
  const location = useLocation();
  const email = new URLSearchParams(location.search).get('email');

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { data } = await axios.post('/api/v1/users/signup', {
        username: e.currentTarget.username.value,
        email: e.currentTarget.email.value,
        password: e.currentTarget.password.value,
        profilePicture:
          e.currentTarget.picURL.value !== ''
            ? e.currentTarget.picURL.value
            : null,
      });
      console.log(data);

      localStorage.setItem('userInfo', JSON.stringify(data));
      storeDispatch({ type: USER_SIGNIN, payload: data });
      navigate('/browse');
    } catch (error) {
      const axiosError = error as AxiosError<CustomError>;
      toast.error(getError(axiosError));
    }
  };

  return (
    <AuthLayout className="bg-white">
      <div className="flex flex-col gap-40 bg-white h-screen">
        <section className="flex justify-center z-10">
          <form
            className="flex flex-col gap-3 w-72 p-10 mt-20"
            onSubmit={submitHandler}>
            <div className="text-3xl font-semibold py-3 text-black">
              Sign Up
            </div>

            {email && <Input defaultValue={email} name="email" />}

            <Input placeholder="Name" name="username" />

            <Input placeholder="Choose Password" name="password" />

            <Input placeholder="Profile Picture URL" name="picURL" />

            <Button type="submit" className="bg-red-600">
              Sign Up
            </Button>
          </form>
        </section>
      </div>
    </AuthLayout>
  );
};

export default RegisterForm;

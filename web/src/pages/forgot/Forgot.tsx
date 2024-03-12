import Footer from '@/utils/components/footer/Footer';
import { AlertTriangleIcon } from 'lucide-react';

type Props = {};

const Forgot = ({}: Props) => {
  return (
    <>
      <div className="h-full w-full flex flex-col justify-between items-center">
        <section className="mt-40 flex flex-col items-center">
          <strong className="text-6xl">Under construction...</strong>
          <AlertTriangleIcon size={300} color="yellow" />
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Forgot;

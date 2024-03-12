import { Button } from '@/components/ui/button';
import LoadingSpinner from './LoadingSpinner';
import { useState } from '@/utils/imports';

type Props = {
  btnText: string;
  loading: boolean;
  children?: React.ReactNode;
  className?: string;
};

const CompletAuthBtn = ({ btnText, loading, children, className }: Props) => {
  const [loaderColor, setLoaderColor] = useState<string>('');

  return (
    <Button
      type="submit"
      className={`bg-red-600 ${className}`}
      onMouseEnter={() => setLoaderColor('red')}
      onMouseLeave={() => setLoaderColor('black')}>
      {loading ? <LoadingSpinner color={loaderColor} /> : btnText}
      {children}
    </Button>
  );
};

export default CompletAuthBtn;

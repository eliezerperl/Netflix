import ClipLoader from 'react-spinners/ClipLoader';

type Props = {
  color: string;
};

const LoadingSpinner = ({ color }: Props) => {
  return (
    <ClipLoader
      color={color}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default LoadingSpinner;

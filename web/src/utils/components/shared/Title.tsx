import { Helmet } from 'react-helmet-async';

type Props = {
  title: string;
};

const Title = ({ title }: Props) => {
  return (
    <>
      <Helmet>
        <title>Netflix - {title}</title>
      </Helmet>
    </>
  );
};

export default Title;

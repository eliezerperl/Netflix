import { Helmet } from 'react-helmet-async';

type Props = {
  title: string;
};

const Title = ({ title }: Props) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </>
  );
};

export default Title;

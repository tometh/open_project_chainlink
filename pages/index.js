export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: '/dashboard',
      permanent: true,
    },
  };
}

const IndexPage = () => {
  return null;
};

export default IndexPage;

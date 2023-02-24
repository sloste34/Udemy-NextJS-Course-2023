import { useRouter } from 'next/router';

function ClientProjectsPage() {
  const router = useRouter();
  console.log(router.query);

  function loadProjectHandler() {
    router.replace({
      pathname: '/clients/[id]/[clientprojectid]',
      query: {
        id: 'max',
        clientprojectid: 'project-a',
      },
    });
  }

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Go To Project</button>
    </div>
  );
}

export default ClientProjectsPage;

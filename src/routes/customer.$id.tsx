import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/customer/$id')({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();
  return <>{`Book ID: ${id}`}</>;
}

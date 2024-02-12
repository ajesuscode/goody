export default async function KidPage({ params }: { params: { id: string } }) {
    return <div>{params.id}</div>;
}

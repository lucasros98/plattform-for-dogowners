import DogUpdate from "./DogUpdate"

export default function Updates({ user, updates, updateDog}) {

    if(!updates && updates.length === 0) return;

    return (
        <div className="container grid grid-flow-row gap-4">
            {updates.map((u) => {
                return <DogUpdate key={u._id} user={user} data={u} updateDog={updateDog}/>
            })}
        </div>
    );
}

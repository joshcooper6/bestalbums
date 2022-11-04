import { data } from "./data";
import Player from "./Player";
import Card from "./Card";

export default function Main() {
    console.log(data)

    const albums = data.map((album) => {
        return <Card tgt={album} />
    })

    return <>
        <div className="flex gap-4 mt-10 flex-wrap justify-center items-center mb-[120px]">
            {albums}
        </div>
        <Player />
    </>
}
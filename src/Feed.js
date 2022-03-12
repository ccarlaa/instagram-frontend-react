import Stores from "./Stores";
import Posts from "./Posts";

export default function Feed() {
    return (
        <div class="conteudo">
            <div class="feed">
            <div class="feedmaisstores">
                    <Stores />
                    <Posts />
                </div>
            </div>
        </div>
    )
}

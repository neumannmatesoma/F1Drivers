import DetailedDriverView from "./DetailedDriverView";
import Buttons from "../Buttons/Buttons";

export default function DetailedCardView({ pilots, onDelete }) {
    return (
        <div>
            <Buttons />
            <DetailedDriverView
                pilots={pilots}
                onDelete={onDelete}
            />
        </div>
    );
}
import detailedIcon from "../../assets/icons/detailed_view.svg";
import listIcon from "../../assets/icons/list_view.svg";


export default function Buttons() {
    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: '10px', paddingRight: '10%', paddingTop: '10px' }}>
            <a style={{ margin: '10px' }} class="icon" href="/drivers/detailed">
                <img style="height:40px; width: 40px;" src={detailedIcon} alt="detailed view" />
            </a>
            <a style={{ margin: '10px' }} class="icon" href="/drivers/list">
                <img style="height:50px; width: 50px;" src={listIcon} alt="list view" />
            </a>
        </div>
    );
}
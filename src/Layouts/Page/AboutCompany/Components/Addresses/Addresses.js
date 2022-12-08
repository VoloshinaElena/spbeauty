import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div className='d-flex justify-content-between flex-column p-4 col-4 border-addresses'>
        <div className='d-inline-flex flex-column gap-4'>
            <div className='title'>Адреса заведений</div>
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
            </div>
            <div className='d-inline-flex flex-column'>
                <SecondaryButton>Добавить филиал</SecondaryButton>
                </div>
            
        </div>
    );
}

export default Addresses;
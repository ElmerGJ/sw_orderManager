import BottomMenu from '../components/nav/BottomMenu';
import AccountButton from "../components/buttons/AccountButton";

function Deliveries() {
  return (
    <div>
      <h1>Deliveries</h1>
        <div>
            <AccountButton/>
        </div>
        <div>
            <BottomMenu />
        </div>
    </div>
  );
}

export default Deliveries;

import "../../Assests/scss/shop/shop.css";
import PaymentForm from "./PaymentForm";
import FilteredBasket from "./FilteredBasket";
import { useEffect, useState, memo } from "react";
import EmptyAlert from "./EmptyAlert";
import Payment from "./Payment";
import { useSelector } from "react-redux";

const Shop = () => {
  const active = useSelector((state) => state.market.active);
  const isActive = useSelector((state) => state.author.activeUser);
  const storedData = JSON.parse(localStorage.getItem("market"));
  const [empty, setEmty] = useState(false);
  useEffect(() => {
    if (!storedData || storedData.length === 0) {
      setEmty(false);
    } else {
      setEmty(true);
    }
  }, [storedData]);

  return (
    <div className="Shop">
      {active && <Payment />}
      {!active && (
        <div className="Shop-center">
          {!empty && <EmptyAlert />}
          {!isActive && <EmptyAlert />}

          {empty && isActive && (
            <>
              <div className="Shop-product">
                <FilteredBasket />
              </div>
              <div className="Payment-form">
                <PaymentForm />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default memo(Shop);

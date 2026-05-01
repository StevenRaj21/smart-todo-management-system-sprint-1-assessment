import { useLocation, useNavigate } from "react-router-dom";
import DefaultButtons from "../Buttons/Button.Component";

const Navigator = ({ toEndPoint, label, buttonClass }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = () => {
    navigate(toEndPoint);
  };

  const isActive = location.pathname === toEndPoint;
  return (
    <DefaultButtons
      buttonText={label}
      className={`${buttonClass} ${isActive ? "active" : ""}`}
      onClick={handleNavigation}
    />
  );
};

export default Navigator;

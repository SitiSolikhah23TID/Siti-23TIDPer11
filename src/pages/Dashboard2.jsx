import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import CardCount from "../components/CardCount";
import frameworkData from "../data.json";
import AddButton from "../components/AddButton";


export default function Dashboard2() {
  const breadcrumb = ['Home', '/','Dashboard', ' / ', 'Home Detail' ]
  return (
    <div id="dashboard-container">
      <PageHeader
          title = 'Dashboard'
          breadscrumb = {breadcrumb}
          children={<AddButton name="add-button" label="Add Button"/>}
      /> 
      <div id="dashboard-grid" className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {frameworkData.map((item) => {
          return (
            <CardCount 
              key={item.id} 
              count={item.count} 
              text={item.text} 
              color={item.color} 
              icon={item.icon}
            />        
          );
        })}
      </div>
    </div>
  );
}

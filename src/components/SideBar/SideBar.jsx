
import './SideBar.css'

const html = new URL("../../images/html.png", import.meta.url)
const SideBar = () => {
  return (
    <sidebar>
        <img src={html} id="stars" alt="HTML" />
    </sidebar>
  );
};

export default SideBar
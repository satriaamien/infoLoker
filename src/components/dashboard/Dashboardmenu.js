const DashboardMenu = (props) => {
  return (
    <div>
      <div>{props.nav}</div>
      <div>{props.sidebar}</div>
      <div>{props.content}</div>
    </div>
  );
};
export default DashboardMenu;

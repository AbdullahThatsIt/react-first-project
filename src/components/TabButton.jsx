export default function TabButton({ children, isSelected, ...props }) {
  console.log("TABBUTTON COMPONENT EXECUTING");

  // document.querySelector('button').addEventListener('click', () => {
  //     console.log('clicked');
  // });

  return (
    <li>
      {/* <button className={isSelected ? 'active' : undefined} onClick={onSelect}> */}
      <button className={isSelected ? 'active' : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}

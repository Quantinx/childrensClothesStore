import { usePopup } from '../providers/useCartPopup'

export default function Header() {
  const { togglePopup } = usePopup();

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>EXAMPLE SITE NAME</h1>
        <button onClick={togglePopup}>Cart</button>
      </div>
    </>
  );
}

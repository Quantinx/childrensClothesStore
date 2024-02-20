import Cart from "./Cart";

export default function Header() {
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
        <Cart />
      </div>
    </>
  );
}

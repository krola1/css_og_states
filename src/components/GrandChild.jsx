import "animate.css";

export default function GrandChild() {
  const styleObj = {
    backgroundColor: "black",
    border: "solid black",
    color: "blue",
  };

  return (
    <div className="grand-child-wrapper">
      <h1 style={styleObj} class="animate__animated animate__heartBeat">
        GrandChild
      </h1>
    </div>
  );
}

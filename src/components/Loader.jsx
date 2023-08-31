import { ThreeDots } from "react-loader-spinner";

function Loader({ visibility }) {
  return (
    <div>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#f33986"
        className="Loader"
        visible={visibility}
      />
    </div>
  );
}

export default Loader;

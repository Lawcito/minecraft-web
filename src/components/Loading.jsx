import loadingImg from "../assets/loading.gif";

function Loading({ w }) {
  return (
    <div>
      <img src={loadingImg} alt="" className={`w-${w}`} />
    </div>
  );
}

export default Loading;

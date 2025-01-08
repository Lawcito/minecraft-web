import loadingImg from "../assets/loading.gif";

function Loading() {
  return (
    <div className="items-center flex justify-center">
      <img src={loadingImg} alt="" className="w-5 h-5" />
    </div>
  );
}

export default Loading;

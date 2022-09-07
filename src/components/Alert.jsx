const Msg = ({message}) => {
  return (
    <div
      className={`${message.error ? "text-white bg-rose-400 px-2" : "text-white bg-green-500" } text-sm`}
    >
      {message.msg}
    </div>
  );
};

export default Msg;
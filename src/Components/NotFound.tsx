import notFound from "../assets/404.svg";
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[90vh] text-2xl font-bold">
        <img className="size-80" src={notFound} alt="notFound" />
        Not Found
    </div>
  )
}

export default NotFound
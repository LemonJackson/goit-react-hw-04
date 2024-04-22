import toast, { Toaster } from "react-hot-toast";
export default function ErrorMessage() {
  // toast("Whoops, something went wrong! Please try reloading this page!", {
  //   icon: "🚨",
  // });
  return (
    <div>
      <p>Whoops, something went wrong! Please try reloading this page!</p>
    </div>
  );
}

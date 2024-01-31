import { useNavigate } from "react-router-dom";
import { extractRolesFromToken } from "../utils/extractRolesFromToken";
import { useEffect } from "react";

export default function MyPage({ token }) {
  console.log("MyPage:", token);

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate("/");
  }, []);

  // function handleExpiredFromToken({ token }) {
  //   const user = jwtDecode(token);
  //   // user exp is missing miliseconds, so user.exp * 1000 fakes the miliseconds
  //   const exp = user.exp * 1000;
  //   console.log(exp < Date.now());
  // }

  return (
    <div>
      My Page
      {/* `My Page ${localStorage.getItem("token")}` */}
      <p>
        <button onClick={() => extractRolesFromToken(token)}>
          Extract Roles From Token
        </button>
      </p>
      {/* <p>
        <button onClick={() => extractExpiredFromToken(token)}>
          Extract Expired From Token
        </button>
      </p> */}
      {/* <Decision />
      <Decision />
      <Decision /> */}
    </div>
  );
}

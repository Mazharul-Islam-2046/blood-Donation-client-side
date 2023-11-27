
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import PropTypes from "prop-types";
import app from "../Firebase/firebase.config";
import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import axios from "axios";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

export const AuthContext = createContext(null);


const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [axiosPublic] = useAxiosPublic()
  const [dashboardMenus, setDashboardMenu] = useState([]);


  const { data: upazilas = [] } = useQuery({
    queryKey: ['upazilas'],
    queryFn: async () => {
        const res = await axiosPublic.get('/upazilas');
        return res.data;
    }
})






  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);












  // District fetch



  const { data: districts = [] } = useQuery({
    queryKey: ['districts'],
    queryFn: async () => {
        const res = await axiosPublic.get('/districts');
        return res.data;
    }
})










  // Navbar profile image
  const [photo, setPhoto] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  










  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      // get and set token
      if (currentUser) {
        axios
          .post("http://localhost:5000/jwt", {
            email: currentUser.email,
          })
          .then((data) => {
            localStorage.setItem("access-token", data.data.token);
            setLoading(false);
          });
      } else {
        localStorage.removeItem("access-token");
        // Akam
        setLoading(false);
      }

      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);




  useEffect(()=>{
    fetch (`http://localhost:5000/users/${user?.email}`)
    .then(res=> res.json())
    .then((data) => {
      setUserData(data)
      setPhoto(data.image)

    })
  },[user])




  useEffect(()=>{
    fetch (`http://localhost:5000/menus/${user?.email}`)
    .then(res=> res.json())
    .then((data) => {
      setDashboardMenu(data)
    })
  },[user])


 const [userRole, setUserRole] = useState(null)
  useEffect(()=>{
    fetch (`http://localhost:5000/users/role/${user?.email}`)
    .then(res=> res.json())
    .then((data) => {
      setUserRole(data[0])
    })
  },[user])










  













  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    googleSignIn,
    setPhoto,
    photo,
    products,
    districts,
    upazilas,
    userData,
    dashboardMenus,
    userRole
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;

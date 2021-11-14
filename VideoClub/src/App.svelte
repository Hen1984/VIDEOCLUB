<script>
    import { db } from "./firebase";
	import {
		collection,
		getDocs,
		doc,
		addDoc,
		updateDoc,
		deleteDoc,
	} from "firebase/firestore";

    import {db} from  "./firebase";
    import {
        collection,
        getDocs,
        doc,
        addDoc,
        updateDoc,
        deleteDoc,
    } from "firebase/firestore";

let film = {
    title: "",
    year: "",
    poster: "",
}
let edit = false;

let films = [];
 
 const loadFilm = async () => {
     const querySnapshot = await getDocs(collection(db, "Peliculas"));
     let docs = [];
     querySnapshot.forEach({...doc.data(), id: doc.id });
 
 films = [...docs];
 console.log(films)
};

 loadFilm();
 let edit = false;

 const clearForm =async () => {
    film = {
    title: "",
    year: "",
    category: "",
    poster: "",
}
    edit= false;
 };
 const addFilm = async () => {
     await addDoc(collection(db, "Peliculas"), film);
     await loadFilm();
     clearForm();
 }
 const saveFilm = async () => {
     await updateDoc(doc(db, "Peliculas", film.id), film);
     await loadFilm();
     clearForm();
 }
 editFilm = (i) => {
     film = Object.assign({}, i);
     edit = true;
 }
 const deleteFilm = async (id) => {
     await  deleteDoc(doc(db, "Peliculas", id));
     await  clearForm();
 };
  const onSubmitHandlerFilm = (f) => {
      if (edit) {
          console.log("save..");
      }else{
          addFilm();
      }
 };
 // CUstomers

 let customer = {
     name: "",
     lastName: "",
     dateOfBirth: "",
     Category_preference:"",

 }
 
 const loadCustomer = async () => {
     const querySnapshot = await getDocs(collection(db, "Customer"));
     let docs = [];
     querySnapshot.forEach({...doc.data(), id: doc.id });
 
 films = [...docs];
 console.log(films)
};

 loadFilm();
 loadCustomer();
 let edit = false;

 const clearCustomer =async () => {
    film = {
    title: "",
    year: "",
    category: "",
    poster: "",
}
    edit= false;
 };
 const addCustomer = async () => {
     await addDoc(collection(db, "Customers"), film);
     await loadCustomer();
     clearCustomer();
 }
 const saveCustomer = async () => {
     await updateDoc(doc(db, "Customers", film.id) film);
     await loadCustomer();
     clearCustomer();
 }
 const editCustomer = (i) => {
     film = Object.assign({}, i);
     edit = true;
 }
 const deleteCustomer = async (id) => {
     await  deleteDoc(doc(db, "Customers", id));
     await  clearCustomer();
 };
  const onSubmitHandlerCustomer = (a) => {
      if (edit) {
          console.log("save..");
      }else{
          addCustomer();
      }
 };
 </script>
 
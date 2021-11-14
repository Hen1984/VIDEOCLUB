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
     querySnapshot.forEach((...doc.data(), id: doc.id }));
 });
 loadFilm();
 let edit = false;

 const clearForm =async () => {
    film = {
    title: "",
    year: "",
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
     await updateDoc(doc(db, "Peliculas", film.id) film);
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

</script>


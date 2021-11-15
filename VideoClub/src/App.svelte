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

    import {
        collection,
        getDocs,
        doc,
        addDoc,
        updateDoc,
        deleteDoc,
    } from "firebase/firestore";
import { xlink_attr } from "svelte/internal";
import { prevent_default } from "svelte/types/runtime/internal/dom";

let film = {
    title: "",
    year: "",
    category: "",
    poster: "",
}
let edit = false;
let available = false;

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

 };
 
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
     await updateDoc(doc(db, "Customers", film.id), film);
     await loadCustomer();
     clearCustomer();
 }
 const editCustomer = (a) => {
     film = Object.assign({}, a);
     edit = true;
 }
 const deleteCustomer = async (id) => {
     await  deleteDoc(doc(db, "Customers", id));
     await  clearCustomer();
 };
  const onSubmitHandlerCustomer = (j) => {
      if (edit) {
          console.log("save..");
      }else{
          addCustomer();
      }
 };
 </script>
 <main>
     <div class="header">
        <h1>AQUI VA LA CABECERA</h1>
     </div>
     <div class="chargeFilms">
         {#each films as i, x}
            <div clas ="view">
                {#if i.poster}
                    <img class ="porter" src ={c.poster} alt="thumbnail"/>
                {:else}
                    <p>Not Found</p>
                {/if}

                <p>TITLE: {i.title}</p>
                <p>YEAR: {i.year}</p>
                <p>CATEGORY:  {i.category}</p>
                <button on:click="{editFilm(i)}">Edit</button>
                <button on:click="{deleteFilm(i.id)}">Remove</button>
            </div>
        {/each}
    </div>

    <div class= "comprobation">
        <button on:click="{() => available = !available}">Films</button>
    </div>
    <div class:available={!available} id="film">
        <form on:submit|prevent_default={onSubmitHandlerFilm}>
            <h3> Form for Films</h3>
            <p>Title</p>
            <input type="text" bind:value={film.title}/>
            <p>Year</p>
            <input type="text" bind:value={film.title}/>
            <p>Category</p>
            <input type="text" bind:value={film.category}/>
            <p>Poster</p>
            <input type="text" bind:value={film.poster}/>
            {#if edit}
                <button>Edit</button>
            {:else}
                <button>Add</button>
            {/if}
        </form>
    </div>
    <div class="chargeFilms">
        {#each films as a, p}
           <div clas ="view">
               <p>NAME: {a.title}</p>
               <p>LAST NAME: {a.year}</p>
               <p>DATE OF BIRTH:  {a.dateOfBirth}</p>
               <p>CATEGORY PREFERENCE:  {a.Category_preference}</p>
               <p>FILM:  {a.film}</p>
               <button on:click="{editCustomer(a)}">Edit</button>
               <button on:click="{deleteCustomer(a.id)}">Remove</button>
           </div>
       {/each}
   </div>
   <div class="FormCustomer">
    <form on:submit|prevent_default={onSubmitHandlerCustomer}>
        <h3> Form for Customer</h3>
        <p>Name</p>
        <input type="text" bind:value={customer.name}/>
        <p>Last Name</p>
        <input type="text" bind:value={customer.lastName}/>
        <p>Date Of Birth</p>
        <input type="text" bind:value={customer.dateOfBirth}/>
        <p>Category Preference</p>
        <select bind:value={customer.Category_preference}>
            <option>Terror</option>
            <option>Comedy</option>
            <option>Love</option>
            <option>Drama</option>
        </select>
        {#if edit}
            <button>Edit</button>
        {:else}
            <button>Add</button>
        {/if}
    </form>
</div>

     
    
 </main>
 
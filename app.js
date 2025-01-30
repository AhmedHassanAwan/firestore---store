import { collection, addDoc , getDocs , Timestamp , query, orderBy   } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

import { db } from "./config.js";

// date
// const currentDate = new Date();
// const formattedDate  = `${currentDate.getDate()} - ${currentDate.getMonth() + 1} - ${currentDate.getFullYear()}`



const title = document.querySelector("#title")
const description = document.querySelector("#description")
const btn = document.querySelector("#btn")
const div = document.querySelector("#card")

btn.addEventListener("click",async (e)=>{
  e.preventDefault()
  console.log(title.value);
  console.log(description.value);
  
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      title : title.value,
       description : description.value,
       date: Timestamp.fromDate(new Date()),

      //  date: formattedDate, 
     
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }  
  
  const array = []
  const q = query(collection(db, "posts"), orderBy("date", "desc"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    
    
    array.push({...doc.data() , docID :  doc.id})
    console.log(doc.id);
    
    // array.push({...doc.data(), docID : doc.id})
    // console.log(`${doc.id} => ${doc.data()}`);
    
  });
  console.log(array);
  div.innerHTML = "";
  array.map((items)=>{
    console.log(items);

    div.innerHTML += `
                <div class="card">
                <div class="card-body">
                <p> <span> <h3> Tittle</h3> </span> ${items.title}</p>
                <p> <span> <h3> Description</h3> </span> ${items.description}</p>
                <p> <span> <h3> Time</h3> </span> ${items.date}</p>
                <button type="button" id="deletebtn" class="btn btn-danger">Delete</button>
                <button type="button" id="editbtn" class="btn btn-info">Edit</button>
          </div>
         </div> `

         
})

// const delBtns = document.querySelectorAll("#deletebtn");

// delBtns.forEach((btn)=>{
//   btn.addEventListener("click",()=>{
//     console.log(btn);
    
//   })
// })



const del = document.querySelectorAll("#deletebtn")
const edit = document.querySelectorAll("#editbtn")


del.forEach((btn , index)=>{
  btn.addEventListener("click",()=>{
    console.log(btn , index);
    
  })
})



edit.forEach((btnedit , index )=>{
  btnedit.addEventListener("click",()=>{
    console.log(btnedit , index);
    
  })
})

})

